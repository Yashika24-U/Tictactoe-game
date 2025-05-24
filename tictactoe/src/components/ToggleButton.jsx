import React from "react";
import { Sun, Moon } from "lucide-react";

const ToggleButton = ({ toggleDarkMode, darkMode }) => {
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="mb-6 px-6 py-3 rounded bg-gray-700 text-white dark:bg-yellow-400 dark:text-black"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        <span className="sr-only">Toggle Theme</span>
      </button>
    </div>
  );
};

export default ToggleButton;
