import React from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 z-50 shadow-sm">
      <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Camden Beightler</h1>
      <div className="flex items-center gap-4">
        <a href="#home" className="hover:text-indigo-500">Home</a>
        <a href="#about" className="hover:text-indigo-500">About</a>
        <a href="#projects" className="hover:text-indigo-500">Projects</a>
        <a href="#skills" className="hover:text-indigo-500">Skills</a>
        <a href="#contact" className="hover:text-indigo-500">Contact</a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}