import { AvatarComponent } from "../Avatar";
import { TextoApresentacao } from "../TextoApresentacao";

export function Main() {
  return (
    <main className="flex flex-col items-center justify-center">
      <AvatarComponent />
      <TextoApresentacao />
    </main>
  );
}
