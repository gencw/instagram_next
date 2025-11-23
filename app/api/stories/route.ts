import { generateStory } from "@/lib/instagram/stories";

export function GET() {
  const list = Array.from({ length: 20 }).map(() => generateStory());

  return Response.json({
    stories: list,
  });
}
