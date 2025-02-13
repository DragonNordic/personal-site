"use client";

import React from 'react';
import { useTheme } from './theme-provider';
import "./css/header.css"

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <div
      className="switch p-2 text-[#ffffff]"
      aria-label="Toggle Theme"
    >
        <input className="switch__input" onClick={toggleTheme} type="checkbox" role="switch"/>
        <svg className="switch__icon switch__icon--light pointer-events-none" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
            <g fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
                <circle cx="6" cy="6" r="2" />
                <g stroke-dasharray="1.5 1.5">
                    <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
                </g>
            </g>
        </svg>
        <svg className="switch__icon switch__icon--dark pointer-events-none" viewBox="0 0 12 12" width="12px" height="12px" aria-hidden="true">
            <g fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="round" transform="rotate(-45,6,6)">
                <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"/>
            </g>	
        </svg>
    </div>
  );
};

export default ThemeToggle;