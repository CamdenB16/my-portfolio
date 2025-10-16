import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h2>

      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99,102,241,0.2)" }}
          className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 max-w-sm text-center transition-all duration-300"
        >
          <HiOutlineMail className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Email Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            camdenbeightler@gmail.com
          </p>
          <a
            href="mailto:camdenbeightler@gmail.com"
            className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
          >
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}


