import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "../../assets/avatar.svg";

export function AvatarComponent() {
  return (
    <Avatar className="w-24 h-24 mt-10">
      <AvatarImage src={avatar} alt="Avatar" />
      <AvatarFallback className="bg-blue-500 text-white">GM</AvatarFallback>
    </Avatar>
  );
}
