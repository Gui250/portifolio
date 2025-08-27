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
    <div className="flex items-center justify-center min-w-[80px] sm:min-w-[120px]">
      <img
        src={link}
        alt={description}
        className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform hover:scale-110"
      />
    </div>
  );
}

// Componente container para o carrossel
export function TecnologiesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const technologies = [
    { link: logoReact, description: "React" },
    { link: logoJavascript, description: "Javascript" },
    { link: logoHtml, description: "HTML" },
    { link: logoCss, description: "CSS" },

    { link: logoReact, description: "React" },
    { link: logoJavascript, description: "Javascript" },
    { link: logoHtml, description: "HTML" },
    { link: logoCss, description: "CSS" },
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
    // Verificar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + (isMobile ? 0.2 : 0.3); // Movimento mais suave para mobile
        // Reset quando chegar ao final para criar loop infinito
        if (newPosition >= (isMobile ? 200 : 150)) {
          // Aumentado para garantir que todos os logos apareçam no mobile
          return 0;
        }
        return newPosition;
      });
    }, isMobile ? 60 : 50); // Velocidade mais suave para mobile

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-8 sm:gap-16 items-center"
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
