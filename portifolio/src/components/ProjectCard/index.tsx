import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import imageProject from "../../assets/projeto-mundo-pet.png";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Card className="w-full h-full bg-zinc-800 border-zinc-700 hover:border-zinc-600 transition-all duration-300 p-0">
        <CardHeader className="p-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={imageProject}
              alt={title}
            />
          </a>
        </CardHeader>
        <CardContent className="pt-4">
          <CardTitle className="text-lg font-semibold text-white mb-2 py-2">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-[#c5c5c5] leading-relaxed py-2">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
