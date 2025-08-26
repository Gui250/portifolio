import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatar from "../../assets/avatar.svg";
import { TextoApresentacao } from "../TextoApresentacao";
export function AvatarComponent() {
  return (
    <div>
      <Avatar className="w-24 h-24 mt-10">
        <AvatarImage src={avatar} alt="Avatar" />
        <AvatarFallback>GM</AvatarFallback>
      </Avatar>
      <TextoApresentacao />
    </div>
  );
}
