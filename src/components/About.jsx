import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-background dark:bg-black transition-colors duration-500"
    >
      <motion.div
        className="container mx-auto px-6 text-center md:text-left max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a passionate Full-Stack Developer with experience in building modern web applications using React, Next.js, Tailwind CSS, and Node.js.  
          I love crafting responsive, performant, and user-friendly websites with smooth animations.  
          My goal is to create digital experiences that are visually appealing and highly functional.
        </p>
      </motion.div>
    </section>
  );
}
