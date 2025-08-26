import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Loader2Icon } from "lucide-react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export function TextoApresentacao() {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldDownload, setShouldDownload] = useState(false);

  useEffect(() => {
    if (shouldDownload) {
      handleLoading();
      const link = document.createElement("a");
      link.href = "/Guilherme Moreno.pdf";
      link.download = "Guilherme_Moreno_Curriculo.pdf";
      link.click();

      setShouldDownload(false);
    }
  }, [shouldDownload]);

  function handleLoading() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-white text-3xl font-bold max-w-[41rem] mt-4 text-center">
        Olá, sou o Guilherme, <br />
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Desenvolvedor Front-End",
            1000,
            "Engenheiro de Software",
            1000,
            "Inovação e Tecnologia",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.56rem",
            display: "inline-block",
            background:
              "linear-gradient(115.69deg, #FF8660 71.79%, #9A33FF 95.51%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          repeat={Infinity}
        />
      </h2>
      <p className="text-white text-lg text-center max-w-[41rem] mt-4">
        Sou um desenvolvedor Front-End com experiência em dar vida a projetos e
        soluções digitais. Atualmente, estou focado em criar interfaces
        responsivas e interativas, utilizando as mais recentes tecnologias e
        práticas de desenvolvimento.
      </p>

      <div className="flex flex-col items-center justify-center mt-14">
        {!isLoading ? (
          <Button
            onClick={() => setShouldDownload(true)}
            className="border-white border-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Meu currículo
          </Button>
        ) : (
          <Button
            disabled
            className="border-white border-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Loader2Icon className="animate-spin" />
            Baixando...
          </Button>
        )}
      </div>
    </div>
  );
}
