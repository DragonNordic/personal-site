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
      <div className="image-background min-h-[800px] lg:min-h-[1200px] w-full flex">
        <div className="container mx-auto my-auto py-[10px] px-[10px] max-w-4xl">
          <div className="bg-[#F3F3F1] h-8 flex items-center rounded-t-lg px-4">
            <div className="mr-auto flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
            <h4 className="text-[#282828] font-medium text-sm mr-auto">PERSONAL CODE EDITOR</h4>
          </div>

          <div className="flex bg-gray-900 text-gray-300 opacity-90">
            <div className="bg-gray-800 text-right py-2 px-2 text-[#98A8B5]">
              {[...Array(27)].map((_, i) => (
                <span key={i + 1} className="block">
                  {i + 1}
                </span>
              ))}
            </div>

            <div className="flex-1 p-[8px]">
              <div>
                <span className="text-blue-400 font-medium">.Person</span>{" "}
                <span className="text-[#98A8B5]">{"{"}</span>
                <br />
                <span className="text-green-400 ml-4">name</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">Rostislav Zavodianyi</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-green-400 ml-4">year</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">21</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-[#98A8B5]">{"}"}</span>
              </div>
              <br />

              <div>
                <span className="text-blue-400 font-medium">.Education</span>{" "}
                <span className="text-[#98A8B5]">{"{"}</span>
                <br />
                <span className="text-green-400 ml-4">City</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">Khmelnitsky</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-green-400 ml-4">College</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">
                  &quot;Khmelnitsky Polytechnical College&quot;
                </span>
                <span className="text-[#98A8B5]">;</span>
                <span className="text-[#98A8B5] font-normal block">&nbsp;&nbsp;&nbsp;/* Bachelor of Programming Engineering,</span>
                <span className="text-[#98A8B5] font-normal block">&nbsp;&nbsp;&nbsp;Computer Software Engineering */</span>
                <br />
                <span className="text-green-400 ml-4">University</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">
                  &quot;Khmelnitsky National University&quot;
                </span>
                <span className="text-[#98A8B5]">;</span>
                <span className="text-[#98A8B5] font-normal block">&nbsp;&nbsp;&nbsp;/* Master of Computer Science,</span>
                <span className="text-[#98A8B5] font-normal block">&nbsp;&nbsp;&nbsp;Computer Science */</span>
                <span className="text-[#98A8B5]">{"}"}</span>
              </div>
              <br />

              <div>
                <span className="text-blue-400 font-medium">.Language</span>{" "}
                <span className="text-[#98A8B5]">{"{"}</span>
                <br />
                <span className="text-blue-400 ml-4">&._Ukrainian</span>{" "}
                <span className="text-[#98A8B5]">{"{"}</span>
                <br />
                <span className="text-green-400 ml-8">Spoken-level</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">&quot;Native language&quot;</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-green-400 ml-8">Written-level</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">&quot;Presentation proficient&quot;</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-[#98A8B5] ml-4">{"}"}</span>
                <br />
                <br />
                <span className="text-blue-400 ml-4">&._English</span>{" "}
                <span className="text-[#98A8B5]">{"{"}</span>
                <br />
                <span className="text-green-400 ml-8">Spoken-level</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">&quot;Upper Intermediate&quot;</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-green-400 ml-8">Written-level</span>
                <span className="text-[#98A8B5]">:</span>{" "}
                <span className="text-white">&quot;Intermediate+&quot;</span>
                <span className="text-[#98A8B5]">;</span>
                <br />
                <span className="text-[#98A8B5] ml-4">{"}"}</span>
                <br />
                <span className="text-[#98A8B5]">{"}"}</span>
              </div>
              <br />
            </div>
          </div>
          <div>
            <div className="bg-[#F3F3F1] h-8 px-4 flex items-center justify-between text-sm rounded-b-lg text-[#282828]">
              <a href="https://www.linkedin.com/in/rostyslav-zavodianyi-30927b223/" target="_blank" className="border-b border-dotted text-[#282828] cursor-pointer">
                &copy; Rostislav Zavodianyi
              </a>
              <button
                className="border-b border-dotted text-[#282828] cursor-pointer"
                onClick={scrollToContact}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <PeriodicTable/>

      <Slider/>

      <div id="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
