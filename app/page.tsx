import React from "react";
import "./css/page.css";

const App = () => {
  return (
    <div id="kapsa">
      <div id="ust">
        <h4 id="baslik">PERSONAL CODE EDITOR</h4>
        <div id="islem">
          <div id="y"></div>
          <div id="s"></div>
          <div id="k"></div>
        </div>
        <div className="temizle"></div>
      </div>

      <div id="orta">
        <div id="no">
          {[...Array(52)].map((_, i) => (
            <span key={i + 1} className="number">{i + 1}</span>
          ))}
        </div>

        <div id="satir">
          <span className="yorum">
          </span>
          <span className="cl">.Persona&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;name</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;Rostislav Zavodianyi</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;year</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;21</span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">{"}"}</span>
          <br />
          <br />

          <span className="cl">.Education&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;City</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;Khmelnitsky</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;College</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">
            &nbsp;"Khmelnitsky Polytechnical College"
          </span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;University</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik text-[#D6FF00]">
            &nbsp;"Khmelnitsky National University"
          </span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">{"}"}</span>
          <br />
          <br />

          <span className="cl">.Languages&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;HTML5</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;CSS</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;JS (ES5, ES6+)</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">{"}"}</span>
          <br />
          <br />

          <span className="cl">.Technologies&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Shopify</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;BigCommerce</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;React.js</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;4 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;jQuery</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;5 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;SASS</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;5 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;LESS</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;5 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Stencil</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Handlebars.js</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Liquid</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;NPM</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Gulp</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;6 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Webpack</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;3 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Tailwind</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;4 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;Bootstrap 3</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;3 years</span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">{"}"}</span>
          <br />
          <br />
          <span className="cl">.Languages&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />

          <span className="cl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&._Ukrainian&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spoken-level</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;"Native language"</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Written-level</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;"Presentation proficient"</span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</span>
          <br />
          <br />

          <span className="cl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&._English&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spoken-level</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;"Upper Intermediate"</span>
          <span className="beyaz">;</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Written-level</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik">&nbsp;"Intermediate+"</span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</span>
          <br />

          <span className="beyaz">{"}"}</span>
          <br />
          <br />

          <span className="id">#some-info&nbsp;</span>
          <span className="beyaz">{"{"}</span>
          <br />
          <span className="secici">&nbsp;&nbsp;&nbsp;content</span>{" "}
          <span className="beyaz">:</span>
          <span className="ozellik text-[#D6FF00]">
            &nbsp;"I am a self-motivated team player, goal-oriented,"
          </span>
          <br />
          <span className="ozellik text-[#D6FF00]">
            &nbsp;&nbsp;&nbsp;responsible, and friendly. Quickly learn new
            technologies.
          </span>
          <br />
          <span className="ozellik text-[#D6FF00]">
            &nbsp;&nbsp;&nbsp;In spare time try to update skills on interesting
            topics."
          </span>
          <span className="beyaz">;</span>
          <br />
          <span className="beyaz">{"}"}</span>
          <br />
        </div>

        <div className="temizle"></div>
      </div>

      <div id="alt">
        &copy; <a href="https://codepen.io/codery">Rostislav Zavodianyi</a>
      </div>
    </div>
  );
};

export default App;
