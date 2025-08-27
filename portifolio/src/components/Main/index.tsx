import { AvatarComponent } from "../Avatar";
import { Projetos } from "../Projetos";
import { TextoApresentacao } from "../TextoApresentacao";
import { TecnologiesCarousel } from "../Tecnologies";

export function Main() {
  return (
    <main className="flex flex-col items-center justify-center font-poppins sm:px-4 px-12">
      <AvatarComponent />
      <TextoApresentacao />
      <h2 className="text-[#c5c5c5] font-poppins font-semibold text-2xl mt-20">
        Experiência Com
      </h2>
      <div className="w-full mt-12">
        <TecnologiesCarousel />
      </div>
      <Projetos />
    </main>
  );
}
