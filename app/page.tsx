"use client";

import React from "react";
import "./css/page.css";
import PeriodicTable from "./periodic-table";
import Slider from "./slider";
import ContactForm from "./contact-form";

const App = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="top" className="image-background min-h-[800px] lg:min-h-[850px] w-full flex">
        <div className="container mx-auto mb-auto mt-[80px] py-[10px] px-[10px] max-w-4xl">
          <div className="counter-background h-8 flex items-center rounded-t-lg px-4">
            <div className="mr-auto flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
            <h4 className="editor-text font-medium text-sm mr-auto">PERSONAL CODE EDITOR</h4>
          </div>

          <div className="flex editor-background text-gray-300 opacity-90">
            <div className="counter-background text-right py-2 px-2 counter-color">
              {[...Array(27)].map((_, i) => (
                <span key={i + 1} className="block">
                  {i + 1}
                </span>
              ))}
            </div>

            <div className="flex-1 p-[8px]">
              <div>
                <span className="class-color">.Person</span>{" "}
                <span className="symbol-color">{"{"}</span>
                <br />
                <span className="style-color ml-4">name</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">Rostislav Zavodianyi</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="style-color ml-4">year</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">21</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="symbol-color">{"}"}</span>
              </div>
              <br />

              <div>
                <span className="class-color">.Education</span>{" "}
                <span className="symbol-color">{"{"}</span>
                <br />
                <span className="style-color ml-4">City</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">Khmelnitsky</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="style-color ml-4">College</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">
                  &quot;Khmelnitsky Polytechnical College&quot;
                </span>
                <span className="symbol-color">;</span>
                <span className="symbol-color block">&nbsp;&nbsp;&nbsp;/* Bachelor of Programming Engineering,</span>
                <span className="symbol-color block">&nbsp;&nbsp;&nbsp;Computer Software Engineering */</span>
                <br />
                <span className="style-color ml-4">University</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">
                  &quot;Khmelnitsky National University&quot;
                </span>
                <span className="symbol-color">;</span>
                <span className="symbol-color block">&nbsp;&nbsp;&nbsp;/* Master of Computer Science,</span>
                <span className="symbol-color block">&nbsp;&nbsp;&nbsp;Computer Science */</span>
                <span className="symbol-color">{"}"}</span>
              </div>
              <br />

              <div>
                <span className="class-color">.Language</span>{" "}
                <span className="symbol-color">{"{"}</span>
                <br />
                <span className="class-color ml-4">&._Ukrainian</span>{" "}
                <span className="symbol-color">{"{"}</span>
                <br />
                <span className="style-color ml-8">Spoken-level</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">&quot;Native language&quot;</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="style-color ml-8">Written-level</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">&quot;Presentation proficient&quot;</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="symbol-color ml-4">{"}"}</span>
                <br />
                <br />
                <span className="class-color ml-4">&._English</span>{" "}
                <span className="symbol-color">{"{"}</span>
                <br />
                <span className="style-color ml-8">Spoken-level</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">&quot;Upper Intermediate&quot;</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="style-color ml-8">Written-level</span>
                <span className="symbol-color">:</span>{" "}
                <span className="editor-text">&quot;Intermediate+&quot;</span>
                <span className="symbol-color">;</span>
                <br />
                <span className="symbol-color ml-4">{"}"}</span>
                <br />
                <span className="symbol-color">{"}"}</span>
              </div>
              <br />
            </div>
          </div>
          <div>
            <div className="editor-text counter-background h-8 px-4 flex items-center justify-between text-sm rounded-b-lg">
              <a href="https://www.linkedin.com/in/rostyslav-zavodianyi-30927b223/" target="_blank" className="cursor-pointer">
                &copy; Rostislav Zavodianyi
              </a>
              <button
                className="cursor-pointer"
                onClick={scrollToContact}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="periodic-table">
        <PeriodicTable/>
      </div>
      <div id="slider">
        <Slider/>
      </div>
      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
