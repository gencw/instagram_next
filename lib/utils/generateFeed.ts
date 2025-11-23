import { faker } from "@faker-js/faker";

// Feed Item
export type FeedItem = any;

// Stories
export type StoryItem = {
  id: string;
  type: "image" | "video";
  media: string;
  author: { username: string; avatar: string };
  views: number;
  closeFriends: boolean;
  createdAt: string;
  expiresAt: string;
};

// Reels
export type ReelItem = {
  id: string;
  cover: string;
  video: string;
  duration: number;
  plays: number;
  likes: number;
  author: { username: string; avatar: string };
  music: string;
  trending: boolean;
  createdAt: string;
};

export function generateInstagramFeed(count = 20): FeedItem[] {
  const items: FeedItem[] = [];
  for (let i = 0; i < count; i++) {
    const type = faker.helpers.weightedArrayElement([
      { value: "post", weight: 7 },
      { value: "reel", weight: 2 },
      { value: "ad", weight: 1 },
    ]);
    switch (type) {
      case "post":
        items.push({
          type: "post",
          id: faker.string.uuid(),
          author: {
            id: faker.string.uuid(),
            username: faker.internet.username(),
            avatar: faker.image.avatar(),
          },
          images: [faker.image.url()],
          caption: faker.lorem.sentence(),
          likes: faker.number.int({ min: 50, max: 90000 }),
          commentsCount: faker.number.int({ min: 0, max: 500 }),
          comments: [],
          createdAt: faker.date.recent({ days: 14 }).toISOString(),
          sponsored: false,
        });
        break;
      case "reel":
        items.push({
          type: "reel",
          id: faker.string.uuid(),
          cover: faker.image.url(),
          video: faker.internet.url(),
          duration: faker.number.int({ min: 3, max: 60 }),
          plays: faker.number.int({ min: 1000, max: 5000000 }),
          likes: faker.number.int({ min: 100, max: 1000000 }),
          author: { username: faker.internet.username(), avatar: faker.image.avatar() },
          music: faker.music.songName(),
          trending: Math.random() < 0.3,
          createdAt: faker.date.recent({ days: 7 }).toISOString(),
        });
        break;
      case "ad":
        items.push({
          type: "ad",
          id: faker.string.uuid(),
          author: { username: faker.company.name(), avatar: faker.image.avatar() },
          images: [faker.image.url()],
          caption: faker.company.catchPhrase(),
          likes: faker.number.int({ min: 10, max: 5000 }),
          comments: [],
          commentsCount: 0,
          createdAt: faker.date.recent({ days: 7 }).toISOString(),
          sponsored: true,
        });
        break;
    }
  }
  return items;
}

export function generateStories(count = 10): StoryItem[] {
  return Array.from({ length: count }).map(() => {
    const isVideo = Math.random() < 0.3;
    return {
      id: faker.string.uuid(),
      type: isVideo ? "video" : "image",
      media: isVideo ? faker.internet.url() : faker.image.url(),
      author: { username: faker.internet.username(), avatar: faker.image.avatar() },
      views: faker.number.int({ min: 0, max: 50000 }),
      closeFriends: Math.random() < 0.1,
      createdAt: faker.date.recent({ days: 1 }).toISOString(),
      expiresAt: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
    };
  });
}

export function generateReels(count = 5): ReelItem[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    cover: faker.image.url(),
    video: faker.internet.url(),
    duration: faker.number.int({ min: 3, max: 60 }),
    plays: faker.number.int({ min: 1000, max: 5000000 }),
    likes: faker.number.int({ min: 100, max: 1000000 }),
    author: { username: faker.internet.username(), avatar: faker.image.avatar() },
    music: faker.music.songName(),
    trending: Math.random() < 0.3,
    createdAt: faker.date.recent({ days: 7 }).toISOString(),
  }));
}
