import { FeedItem } from "@/lib/utils/generateFeed";
import Image from "next/image";
import { faker } from "@faker-js/faker";

interface PostItemContainerProps {
  item: FeedItem
}
export default function PostItemContainer({ item }: PostItemContainerProps) {
  return (
    <Image
      quality={100}
      width={470}
      height={470}
      alt="pic"
      className="object-contain w-full h-full"
      src={
        faker.image.url()
      }
    />
  );
}
