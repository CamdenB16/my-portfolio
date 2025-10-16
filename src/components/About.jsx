import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaMapMarkerAlt, FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  const infoCards = [
    {
      icon: <FaUniversity className="text-indigo-500 text-3xl mb-2" />,
      title: "Education",
      detail: "Software Engineering at Iowa State University",
    },
    {
      icon: <FaMapMarkerAlt className="text-indigo-500 text-3xl mb-2" />,
      title: "Location",
      detail: "Cedar Rapids, IA",
    },
    {
      icon: <FaCode className="text-indigo-500 text-3xl mb-2" />,
      title: "Specialty",
      detail: "Full-Stack Development & Systems Design",
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-3xl mb-2" />,
      title: "Interests",
      detail: "Web Apps • Embedded Systems • UI/UX",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-20 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 relative inline-block">
            About Me
            {/* Animated Gradient Line */}
            <motion.span
              className="absolute left-0 bottom-0 h-1 w-full rounded-full"
              style={{
                background: "linear-gradient(270deg, #6366f1, #a78bfa, #f472b6, #6366f1)",
                backgroundSize: "400% 100%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
            I’m a passionate{" "}
            <span className="text-indigo-500 font-semibold">Software Engineer</span>{" "}
            who loves crafting{" "}
            <span className="text-indigo-500 font-semibold">
              efficient
            </span>
            ,{" "}
            <span className="text-indigo-500 font-semibold">
              modern
            </span>
            , and{" "}
            <span className="text-indigo-500 font-semibold">
              creative
            </span>{" "}
            solutions. From building{" "}
            <span className="text-indigo-500 font-semibold">
              full-stack web applications
            </span>{" "}
            to working on{" "}
            <span className="text-indigo-500 font-semibold">
              embedded systems
            </span>
            , I enjoy bridging{" "}
            <span className="text-indigo-500 font-semibold">
              hardware and software
            </span>{" "}
            to solve real-world problems. My focus is on writing{" "}
            <span className="text-indigo-500 font-semibold">
              clean, maintainable code
            </span>{" "}
            that delivers{" "}
            <span className="text-indigo-500 font-semibold">
              seamless user experiences
            </span>
            .
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(99, 102, 241, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

