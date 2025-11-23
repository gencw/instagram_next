import { faker } from "@faker-js/faker";

export function generateAd() {
  const isVideo = Math.random() < 0.3;
  const imgCount = faker.number.int({ min: 1, max: 5 });

  return {
    type: "ad",
    adId: faker.string.uuid(),
    advertiser: faker.company.name(),
    cta: faker.helpers.arrayElement([
      "Learn More",
      "Shop Now",
      "Sign Up",
      "Install",
    ]),
    url: faker.internet.url(),
    images: !isVideo
      ? Array.from({ length: imgCount }).map(() => faker.image.url())
      : [],
    video: isVideo
      ? {
          url: faker.internet.url(),
          thumbnail: faker.image.url(),
        }
      : null,
    createdAt: new Date().toISOString(),
    sponsored: true,
  };
}
