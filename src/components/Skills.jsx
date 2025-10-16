import { motion } from "framer-motion";
import {
  SiC,
  SiPython,
  SiRust,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiGit,
  SiGitlab,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaMicrochip } from "react-icons/fa";

const skillCategories = {
  "Programming Languages": [
    { name: "C", Icon: SiC },
    { name: "Java", Icon: FaJava },
    { name: "Python", Icon: SiPython },
    { name: "Rust", Icon: SiRust },
  ],
  "Web & Frameworks": [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "React", Icon: SiReact },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express.js", Icon: SiExpress },
    { name: "Spring Boot", Icon: SiSpringboot },
  ],
  "Tools & Databases": [
    { name: "Git", Icon: SiGit },
    { name: "GitLab", Icon: SiGitlab },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: SiMysql },
    { name: "FPGA Design", Icon: FaMicrochip },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-indigo-600 dark:text-indigo-400">
        Skills
      </h2>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {skills.map((skill) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={skill.name}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.06,
                      y: -10,
                      boxShadow:
                        "0 10px 30px rgba(99,102,241,0.28), 0 0 18px rgba(99,102,241,0.12)",
                    }}
                    className="w-40 h-40 flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-150"
                  >
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-md mb-3"
                      aria-hidden
                    >
                      <Icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                    </div>

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}






