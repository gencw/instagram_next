"use client";

import React from "react";
import PostItemHeader from "./post-item-header";
import PostItemContainer from "./post-item-container";
import { FeedItem } from "@/lib/utils/generateFeed";


interface Props {
    initialData: FeedItem[];
    initialPage: number;
    pageSize: number;
}

export default function FeedClient({ initialData, initialPage, pageSize }: Props) {
    const [items, setItems] = React.useState<FeedItem[]>(initialData);
    const [page, setPage] = React.useState(initialPage);
    const [loading, setLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const sentinelRef = React.useRef<HTMLDivElement>(null);

    const fetchNext = React.useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const nextPage = page + 1;
            const res = await fetch(`/api/feed?page=${nextPage}&limit=${pageSize}`);
            const j = await res.json();
            const newItems = j.data || [];

            setItems((prev) => [...prev, ...newItems]);
            setPage(nextPage);

            if (newItems.length < pageSize) setHasMore(false);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, [loading, page, pageSize, hasMore]);

    React.useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) fetchNext();
                });
            },
            { root: null, rootMargin: "200px" }
        );

        observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, [fetchNext]);

    return (
        <div className="space-y-6 w-[470px] mx-auto">
            {items.map((item) => (
                <div key={item.id} className="">
                   <PostItemHeader uid={item.id} avatar={item.author.avatar}/>
                   <PostItemContainer item={item}/>
                    <p className="text-sm mb-1">{item.caption}</p>
                    <p className="text-sm text-gray-600">❤️ {item.likes} · {item.commentsCount} 评论</p>
                    {item.sponsored && <p className="text-xs text-blue-600">Sponsored</p>}
                </div>
            ))}

            <div ref={sentinelRef} className="h-1" />
            {loading && <div className="text-center mt-2">加载中...</div>}
            {!hasMore && <div className="text-center mt-2 text-gray-500">没有更多内容了</div>}
        </div>
    );
}
