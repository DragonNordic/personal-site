"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";
import "./css/header.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLDivElement>(null);

  // Синхронізація з темою
  useEffect(() => {
    applyStyles(theme === "dark");
  }, [theme]);

  const applyStyles = (rolled: boolean) => {
    if (rolled) {
      toggleRef.current!.style.animation = "rollback 1.5s forwards";
      containerRef.current!.style.boxShadow =
        "3.33px 3.33px 3.33px rgba(16, 16, 16, 0.667), 0px -2.67px 3.33px rgba(32, 32, 32, 0.453), -1.67px -1.67px 5px rgb(17, 17, 17) inset, 5px 5px 16.67px rgb(26, 26, 26) inset";
      borderRef.current!.style.backgroundColor = "rgb(23, 23, 23)";
      disclaimerRef.current!.style.color = "white";

      setTimeout(() => {
        toggleRef.current!.style.boxShadow =
          "3.33px 3.33px 5px rgba(0, 0, 0, 0.312), -3.33px -3.33px 3.33px rgba(30, 30, 30, 0.696), 13.33px -1.67px 1px rgb(255, 255, 255) inset, -0.67px 1.67px 3.33px rgba(23, 23, 23, 0.986) inset";
        toggleRef.current!.style.border = "1px solid rgba(28, 28, 28, 0)";
        toggleRef.current!.style.backgroundColor = "rgb(23, 23, 23)";
      }, 250);
    } else {
      toggleRef.current!.style.animation = "roll 1.5s forwards";
      containerRef.current!.style.boxShadow =
        "3.33px 3.33px 3.33px rgb(242, 241, 241), -1.33px -2.33px 5px rgb(242, 241, 241), 0.67px -1.67px 3.33px rgb(255, 255, 255) inset, -3.33px -0.33px 1.67px yellow inset";
      borderRef.current!.style.backgroundColor = "rgb(255, 255, 255)";
      disclaimerRef.current!.style.color = "black";

      setTimeout(() => {
        toggleRef.current!.style.boxShadow =
          "1.67px 1.67px 166.67px rgb(255, 255, 0) inset, 0.17px 0.17px 16.67px yellow";
        toggleRef.current!.style.border = "1px solid rgb(255, 255, 255)";
        toggleRef.current!.style.backgroundColor = "orange";
      }, 250);
    }
  };

  const handleClick = () => {
    toggleTheme(); // Перемикаємо тему
  };

  return (
    <div
      onClick={handleClick}
      className="p-2 text-[#ffffff]"
      aria-label="Toggle Theme"
    >
      <div ref={containerRef} className="spectacledcoder-toggle-container">
        <div ref={borderRef} className="spectacledcoder-toggle-border">
          <div ref={toggleRef} className="spectacledcoder-toggle" />
        </div>
      </div>
      <div ref={disclaimerRef} className="hidden">
        Disclaimer text here
      </div>
    </div>
  );
};

export default ThemeToggle;
