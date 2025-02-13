"use client";

import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed z-50 flex justify-between items-center px-4 w-full h-[60px]">
      <button
        className="relative lg:hidden w-8 h-8 focus:outline-none"
        onClick={toggleMenu}
      >
        <span
          className={`burger-line block absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`burger-line block absolute top-1/2 left-0 w-full h-0.5 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`burger-line block absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        ></span>
      </button>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } burger-background lg:flex lg:items-center lg:space-x-4 lg:py-0 py-2 absolute lg:static top-full left-0 w-full lg:w-auto lg:bg-transparent`}
      >
        <span
          className="smooth-button"
          onClick={() => scrollToSection("top")}
        >
          Info
        </span>
        <span
          className="smooth-button"
          onClick={() => scrollToSection("periodic-table")}
        >
          Table
        </span>
        <span
          className="smooth-button"
          onClick={() => scrollToSection("slider")}
        >
          Slider
        </span>
        <span
          className="smooth-button"
          onClick={() => scrollToSection("contact-form")}
        >
          Contact Me
        </span>
      </nav>

      <div className="block">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
