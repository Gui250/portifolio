import { motion } from "framer-motion";
import { ProjectCard } from "../ProjectCard";

export function Projetos() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-20 mb-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-text mb-8">Projetos</h2>
        </motion.div>
        <p className="text-[#c5c5c5] text-lg mb-8">
          Aqui estão alguns dos meus projetos mais recentes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <ProjectCard
          title="Mundo Pet"
          description="Um sistema de agendamento de consultas para pet shops, desenvolvido com Webpack, Babel e Typescript"
          link="https://mundo-pet-1okq.vercel.app/"
        />
      </div>
    </section>
  );
}
