import Image from "next/image";
import Link from "next/link";

export default function PostItemInteractions() {
  return (
    <div className="p-3 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3">
        <Image src={"/like.svg"} alt="like" width={28} height={28} />
        <Link href={"/"}>
          <Image src={"/comment.svg"} alt="comment" width={28} height={28} />
        </Link>
        <Image src={"/share.svg"} alt="share" width={28} height={28} />
      </div>
      <Image src={"/bookmark.svg"} alt="bookmark" width={32} height={32} />
    </div>
  );
}
