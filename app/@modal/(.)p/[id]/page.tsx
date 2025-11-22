import Image from "next/image";
import { Modal } from "./modal";
import PostItemHeader from "@/components/post-item-header";
import PostItemInteractions from "@/components/post-item-interactions";
import PostCommentItem from "@/components/post-comment-item";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <Modal>
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* 移动端：Header */}
        <div className="md:hidden">
          <PostItemHeader />
        </div>

        {/* 图片区域 */}
        <div className="shrink-0 md:flex-1 bg-black flex items-center justify-center min-h-[50vh] md:min-h-0">
          <Image
            quality={100}
            width={931}
            height={931}
            alt="pic"
            className="object-contain w-full h-full max-h-[70vh] md:max-h-none"
            src={
              "https://s1.aigei.com/src/img/jpg/88/883f9f9c8dfd4f8b99cc8abe8c997333.jpg?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:UvSsaPJ453FbKHB7XmV-aIOoww8="
            }
          />
        </div>

        {/* 移动端：Interactions */}
        <div className="md:hidden">
          <PostItemInteractions />
        </div>

        {/* 桌面端：右侧内容面板 */}
        <div className="hidden md:flex md:flex-col md:w-[500px] lg:w-[400px] xl:w-[600px] md:shrink-0">
          <PostItemHeader />
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 p-4 border-t border-b">
              <PostCommentItem />
              <PostCommentItem />
              <PostCommentItem />
              <PostCommentItem />
            </div>
          </div>
          <PostItemInteractions />
        </div>
      </div>
    </Modal>
  );
}
