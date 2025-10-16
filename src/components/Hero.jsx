import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: { repulse: { distance: 100 } },
      },
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: "#818cf8",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2.5,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20 md:pt-32 overflow-hidden"
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* Floating Heading - Smooth Continuous Motion */}
      <motion.h1
        animate={{
          y: [0, -15, 0], // smooth vertical float
        }}
        transition={{
          duration: 5, // slower and smoother
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6"
      >
        Hey, I'm Camden 👋
      </motion.h1>

      {/* Static Bio */}
      <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-10 px-4">
        I’m a Software Engineer who loves building everything from{" "}
        <span className="text-indigo-500 dark:text-indigo-400">
          embedded systems
        </span>{" "}
        to{" "}
        <span className="text-indigo-500 dark:text-indigo-400">
          web applications
        </span>
        , managing{" "}
        <span className="text-indigo-500 dark:text-indigo-400">databases</span>,
        developing{" "}
        <span className="text-indigo-500 dark:text-indigo-400">apps</span>, and
        more. My goal is to create modern, responsive, and efficient software
        that solves real-world problems.
      </p>

      {/* Static Social Icons */}
      <div className="flex gap-6 text-3xl mb-8">
        <a
          href="https://github.com/CamdenB16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/camden-beightler-344606329"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Resume Button - Float up on hover */}
      <motion.a
        href="/Camden Beightler - Resume (2025).pdf"
        download
        whileHover={{
          y: -6,
          boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.3)",
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        whileTap={{ scale: 0.97 }}
        className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Download Resume
      </motion.a>
    </section>
  );
}