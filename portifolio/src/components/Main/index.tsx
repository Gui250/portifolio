import { AvatarComponent } from "../Avatar";
import { TextoApresentacao } from "../TextoApresentacao";

export function Main() {
  return (
    <main className="flex flex-col items-center justify-center font-poppins sm:px-4 px-12">
      <AvatarComponent />
      <TextoApresentacao />
    </main>
  );
}
