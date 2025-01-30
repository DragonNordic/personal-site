import React from "react";
import "./css/page.css";
import ContactMe from "./contact-pop-up";

const App = () => {
  return (
    <div className="container mx-auto my-4 px-[10px] max-w-4xl opacity-90">
      <div className="bg-[#F3F3F1] h-8 flex items-center rounded-t-lg px-4">
        <div className="mr-auto flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
        </div>
        <h4 className="text-[#282828] font-medium text-sm mr-auto">PERSONAL CODE EDITOR</h4>
      </div>

      <div className="flex bg-gray-900 text-gray-300">
        <div className="bg-gray-800 text-right py-2 px-2 text-[#98A8B5]">
          {[...Array(50)].map((_, i) => (
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
            <span className="text-blue-400 font-medium">.Languages</span>{" "}
            <span className="text-[#98A8B5]">{"{"}</span>
            <br />
            <span className="text-green-400 ml-4">HTML5</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">CSS</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">JS (ES5, ES6+)</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-[#98A8B5]">{"}"}</span>
          </div>
          <br />

          <div>
            <span className="text-blue-400 font-medium">.Technologies</span>{" "}
            <span className="text-[#98A8B5]">{"{"}</span>
            <br />
            <span className="text-green-400 ml-4">Shopify</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">BigCommerce</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">React.js</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">4 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">jQuery</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">5 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">SASS</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">5 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">LESS</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">5 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Stencil</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Handlebars.js</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Liquid</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">NPM</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Gulp</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">6 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Webpack</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">3 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Tailwind</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">4 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
            <span className="text-green-400 ml-4">Bootstrap 3</span>
            <span className="text-[#98A8B5]">:</span>{" "}
            <span className="text-white">3 years</span>
            <span className="text-[#98A8B5]">;</span>
            <br />
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

      <ContactMe/>
    </div>
  );
};

export default App;
