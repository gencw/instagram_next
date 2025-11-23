import { generatePost } from "./posts";
import { generateReel } from "./reels";
import { generateAd } from "./ads";

export function generateFeed(count = 30) {
  const items = [];

  for (let i = 0; i < count; i++) {
    const r = Math.random();

    if (r < 0.7) items.push(generatePost());      // 70% posts
    else if (r < 0.9) items.push(generateReel()); // 20% reels
    else items.push(generateAd());                // 10% ads
  }

  return items;
}
