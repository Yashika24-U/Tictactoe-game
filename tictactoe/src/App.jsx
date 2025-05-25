import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900">
          <Board darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
