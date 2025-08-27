import { motion } from "framer-motion";
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
    <div className="flex items-center justify-center min-w-[80px] md:min-w-[120px]">
      <img
        src={link}
        alt={description}
        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform hover:scale-110"
      />
    </div>
  );
}

// Componente container para o carrossel
export function TecnologiesCarousel() {
  const baseTechnologies = [
    { link: logoReact, description: "React" },
    { link: logoJavascript, description: "Javascript" },
    { link: logoHtml, description: "HTML" },
    { link: logoCss, description: "CSS" },
  ];

  const technologies = [
    ...baseTechnologies,
    ...baseTechnologies,
    ...baseTechnologies,
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-8 md:gap-16 items-center"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
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
