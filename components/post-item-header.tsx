import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";

export default function PostItemHeader() {
  return (
    <div className="w-full p-3 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold">cr7</p>

        <Tooltip>
          <TooltipTrigger>
            <Image
              src={"/badge-check.svg"}
              width={12}
              height={12}
              alt="badge-check"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>已验证</p>
          </TooltipContent>
        </Tooltip>

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
