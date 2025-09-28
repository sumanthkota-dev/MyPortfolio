import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-background dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground dark:text-white">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium shadow cursor-pointer transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
