import { Heart } from "lucide-react";
import UserAvatar from "./user-avatar";
import BadgeCheck from "./badge-check";

export default function PostCommentItem() {
  return (
    <div className="flex flex-row items-start gap-2">
      <UserAvatar uid="1" avatar="https://picsum.photos/200/300" />
      <div className="flex-1 min-w-0">
        <p className="text-sm leading-relaxed">
          <span className="font-semibold hover:underline cursor-pointer mr-1">
            Username
          </span>
          <span className="mr-1">
            <BadgeCheck />
          </span>

          <span className="text-foreground/90">
            Cristiano Ronaldo walked into the White House East Room like it was
            the Bernabéu, instantly becoming the life of the gathering. Trump
            bragged, Elon calculated lighting angles for selfies, and Ronaldo
            just vibed. Staff said the room's energy shifted from presidential
            to nightclub in under five minutes. Even the portraits looked
            entertained.
          </span>
        </p>
      </div>
      <Heart className="cursor-pointer  text-gray-500 hover:text-red-500 transition-colors w-5 h-5" />
    </div>
  );
}
