import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Name or Logo */}
        <div className="text-lg font-semibold tracking-wide text-white">
          © {new Date().getFullYear()} Camden Beightler — All Rights Reserved
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/CamdenB16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/camden-beightler-344606329"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:camdenbeightler@gmail.com"
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Back to top */}
        <a
          href="#home"
          className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
}