import { motion } from "motion/react";

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
    </section>
  );
}
