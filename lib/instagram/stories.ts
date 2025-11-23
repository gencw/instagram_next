import { faker } from "@faker-js/faker";

export function generateStory() {
  const isVideo = Math.random() < 0.3;

  return {
    id: faker.string.uuid(),
    type: isVideo ? "video" : "image",
    media: isVideo ? faker.internet.url() : faker.image.url(),
    author: {
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
    },
    views: faker.number.int({ min: 10, max: 30000 }),
    closeFriends: Math.random() < 0.1,
    createdAt: faker.date.recent({ days: 1 }).toISOString(),
    expiresAt: new Date(Date.now() + 24 * 3600 * 1000).toISOString(),
  };
}
