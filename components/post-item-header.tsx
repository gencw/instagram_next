import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";
import UserAvatar from "./user-avatar";
import BadgeCheck from "./badge-check";
interface PostItemHeaderProps{
  uid:string;
  avatar:string
}
export default function PostItemHeader({uid,avatar}:PostItemHeaderProps) {
  return (
    <div className="w-full p-3 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <UserAvatar uid="1" avatar={avatar} />
        <p className="text-sm font-semibold">cr7</p>
        <BadgeCheck />
        <Tooltip>
          <TooltipTrigger className="cursor-pointer">
            <p>3小时</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>{new Date().getDate()}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Ellipsis className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="bg-white rounded-md"
        ></DialogContent>
      </Dialog>
    </div>
  );
}
