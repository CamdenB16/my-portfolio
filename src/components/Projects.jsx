import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Autonomous Vehicle",
    desc: "Navigates real life fields, avoiding objects, completing tasks, and reaching an end point.",
    link: "https://github.com/CamdenB16/Autonomous-Vehicle",
  },
  {
    title: "Joystick Journeys",
    desc: "Website that contains a catalog of all video games. Create an account, shop and purchase from a selection of 900,000 video games.",
    link: "https://github.com/CamdenB16/Game-Store/tree/main/IP_24-main",
  },
  {
    title: "CyDeck Android App",
    desc: "Collaborative flash card app on android. Allows you to create decks with unlimited collaborators! Test yourself, beat your records, prepare like a pro!",
    link: "https://github.com/CamdenB16/CyDeck",
  },
  {
    title: "Discord Bot (On Git Soon...)",
    desc: "Listen to music, moderate your discord, play games. An all around discord bot that allows you to do almost anything!",
    link: "https://github.com/yourusername/discord-bot",
  },
  {
    title: "Memory Game",
    desc: "A memory game that utilizes the PS4 controller interface to play.",
    link: "https://github.com/CamdenB16/Memory-Game",
  },
  {
    title: "PS4 Maze Game",
    desc: "Navigate random generated mazes without hitting the walls using the PS4 controller.",
    link: "https://github.com/CamdenB16/PS4-Maze-Game",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3 inline-block relative">
          Projects
        </h2>
        <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all cursor-pointer overflow-hidden group"
          >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl blur-xl pointer-events-none" />

            <div className="relative flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                View on GitHub <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}