import { AvatarComponent } from "../Avatar";
import { TextoApresentacao } from "../TextoApresentacao";
import { Tecnologies } from "../Tecnologies";
import logoReact from "../../assets/reactjs.svg";
import logoJavascript from "../../assets/javascript.svg";
import logoHtml from "../../assets/html.svg";
import logoCss from "../../assets/css.svg";
export function Main() {
  return (
    <main className="flex flex-col items-center justify-center font-poppins sm:px-4 px-12">
      <AvatarComponent />
      <TextoApresentacao />
      <h2 className="text-[#c5c5c5] font-poppins font-semibold text-2xl mt-20">
        Experiência Com
      </h2>
      <div className="flex items-center justify-center flex-row gap-16 mt-12">
        <Tecnologies link={logoReact} description="React" />
        <Tecnologies link={logoJavascript} description="Javascript" />
        <Tecnologies link={logoHtml} description="HTML" />
        <Tecnologies link={logoCss} description="CSS" />
      </div>
    </main>
  );
}
