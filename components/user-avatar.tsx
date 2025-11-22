import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface UserAvatarProps {
  uid: string;
  avatar: string;
}
export default function UserAvatar({ uid, avatar }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={avatar} />
      <AvatarFallback>u</AvatarFallback>
    </Avatar>
  );
}
