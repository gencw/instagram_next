// app/api/feed/route.ts

import { generateInstagramFeed } from "@/lib/utils/generateFeed";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
  const limit = Math.max(1, Math.min(50, Number(url.searchParams.get("limit") || "10")));

  // 生成一个较大的 pool（示例：200 条）
  const pool = generateInstagramFeed(200);

  const start = (page - 1) * limit;
  const slice = pool.slice(start, start + limit);

  const total = pool.length;
  const totalPages = Math.ceil(total / limit);

  return Response.json({
    ok: true,
    page,
    limit,
    total,
    totalPages,
    data: slice,
  });
}
