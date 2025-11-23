import { faker } from "@faker-js/faker";

export const randomBool = (trueChance = 0.5) =>
  Math.random() < trueChance;

export const randomFrom = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateHashtags = () =>
  Array.from({ length: faker.number.int({ min: 1, max: 5 }) })
    .map(() => `#${faker.word.sample()}`)
    .join(" ");

export const generateMentions = () =>
  Array.from({ length: faker.number.int({ min: 0, max: 3 }) })
    .map(() => `@${faker.internet.username()}`)
    .join(" ");
