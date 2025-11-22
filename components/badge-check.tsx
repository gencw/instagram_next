import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function BadgeCheck() {
  return (
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
  );
}
