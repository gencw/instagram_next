import { faker } from "@faker-js/faker";
import { generateHashtags, generateMentions, randomBool, randomFrom } from "./utils";

export function generatePost() {
  const imgCount = faker.number.int({ min: 1, max: 6 });
  const isVideo = randomBool(0.2);

  return {
    type: "post",
    id: faker.string.uuid(),
    author: {
      id: faker.string.uuid(),
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
    },
    location: faker.location.city(),
    images: !isVideo
      ? Array.from({ length: imgCount }).map(() =>
          faker.image.url()
        )
      : [],
    video: isVideo
      ? {
          url: faker.internet.url(),
          duration: faker.number.int({ min: 3, max: 60 }),
          thumbnail: faker.image.url(),
        }
      : null,
    caption: `${faker.lorem.sentence()} ${generateHashtags()} ${generateMentions()}`,
    likes: faker.number.int({ min: 10, max: 500000 }),
    commentsCount: faker.number.int({ min: 0, max: 2000 }),
    comments: Array.from({
      length: faker.number.int({ min: 0, max: 5 }),
    }).map(() => ({
      id: faker.string.uuid(),
      username: faker.internet.username(),
      avatar: faker.image.avatar(),
      content: faker.lorem.sentence(),
      createdAt: faker.date.recent({ days: 7 }).toISOString(),
    })),
    createdAt: faker.date.recent({ days: 14 }).toISOString(),

    recommendedReason: randomFrom([
      "Based on your likes",
      "Because you follow similar accounts",
      "Popular posts nearby",
      "Trending now",
      null,
    ]),
  };
}
