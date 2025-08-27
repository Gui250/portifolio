import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logoReact from "../../assets/reactjs.svg";
import logoJavascript from "../../assets/javascript.svg";
import logoHtml from "../../assets/html.svg";
import logoCss from "../../assets/css.svg";

type TecnologiesProps = {
  link: string;
  description: string;
};

export function Tecnologies({ link, description }: TecnologiesProps) {
  return (
    <div className="flex items-center justify-center min-w-[120px]">
      <img
        src={link}
        alt={description}
        className="w-16 h-16 object-contain transition-transform hover:scale-110"
      />
    </div>
  );
}

// Componente container para o carrossel
export function TecnologiesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const technologies = [
    { link: logoReact, description: "React" },
    { link: logoJavascript, description: "Javascript" },
    { link: logoHtml, description: "HTML" },
    { link: logoCss, description: "CSS" },

    { link: logoReact, description: "React" },
    { link: logoJavascript, description: "Javascript" },
    { link: logoHtml, description: "HTML" },
    { link: logoCss, description: "CSS" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 0.2; // Movimento ainda mais suave
        // Reset quando chegar ao final para criar loop infinito
        if (newPosition >= 12.5) {
          // Ajustado para o novo conjunto de tecnologias
          return 0;
        }
        return newPosition;
      });
    }, 20); // Atualização mais frequente para movimento mais suave

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-16 items-center"
        style={{
          transform: `translateX(-${scrollPosition}%)`,
          transition: "transform 0.05s linear",
        }}
      >
        {technologies.map((tech, index) => (
          <Tecnologies
            key={`${tech.description}-${index}`}
            link={tech.link}
            description={tech.description}
          />
        ))}
      </motion.div>
    </div>
  );
}
