import FeedClient from "@/components/feed-client";
import { generateInstagramFeed, generateStories } from "@/lib/utils/generateFeed";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PAGE_SIZE = 10;

// Feed 加载骨架屏
function FeedSkeleton() {
  return (
    <div className="space-y-6 w-[470px] mx-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-3">
          {/* 头部：头像和用户名 */}
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          {/* 图片/视频容器 */}
          <Skeleton className="w-full aspect-square rounded-lg" />
          {/* 互动按钮 */}
          <div className="flex items-center  justify-between">
            <div className="flex flex-row items-center gap-4">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          {/* 标题和描述 */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}

// 异步组件 - 必须在组件内部进行异步操作
async function FeedContent() {
  // 关键：异步操作必须在组件内部，而不是在父组件中
  await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟异步操作
  const feed = generateInstagramFeed(PAGE_SIZE);
  
  return <FeedClient initialData={feed} initialPage={1} pageSize={PAGE_SIZE} />;
}

export default async function Page() {
  // SSR 首屏数据
  const stories = generateStories(10);

  return (
    <main className="p-4 max-w-2xl mx-auto  space-y-10">
      {/* Stories 横条 */}
      <div className="flex gap-4 overflow-x-auto">
        {stories.map((s) => (
          <div key={s.id} className="shrink-0 w-16 text-center">
            <img src={s.author.avatar} className="w-16 h-16 rounded-full border-2 border-pink-500 mb-1" />
            <div className="text-xs truncate">{s.author.username}</div>
          </div>
        ))}
      </div>
      {/* 关键：Suspense 包裹异步组件，而不是同步数据 */}
      <Suspense fallback={<FeedSkeleton />}>
        <FeedContent />
      </Suspense>
    </main>
  );
}
