import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-background dark:bg-black transition-colors duration-500"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-foreground dark:text-white"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="#"
            className="text-foreground dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-foreground dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-foreground dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Twitter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
