import { faker } from "@faker-js/faker";

export function generateReel() {
  return {
    type: "reel",
    id: faker.string.uuid(),
    cover: faker.image.url(),
    video: faker.internet.url(),
    duration: faker.number.int({ min: 3, max: 60 }),
    plays: faker.number.int({ min: 1000, max: 5000000 }),
    likes: faker.number.int({ min: 100, max: 1000000 }),
    author: {
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
    },
    music: faker.music.songName(),
    trending: Math.random() < 0.3,
    createdAt: faker.date.recent({ days: 7 }).toISOString(),
  };
}
