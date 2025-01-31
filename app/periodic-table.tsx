"use client";

import { useState, useRef } from "react";

interface ElementType {
  title?: string;
  desc?: string;
  color?: string;
  textColor?: string;
  tooltip?: string;
  empty?: boolean;
}

const elements: ElementType[] = [
  { title: "Li", desc: "LinkedIn", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "I'm only on here to reject invitations 😂" },
  { title: "Fb", desc: "Facebook", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "Only so I don't miss out on my friends' milestones 🤷" },
  { empty: true }, { empty: true }, { empty: true }, { empty: true },
  { title: "Db", desc: "Dribbble", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "Looking at amazing Dribbble shots and internally die from the amount of talent/skill out there" },
  { title: "Ct", desc: "Commits", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Coming up with sassy commit messages 🔥" },
  { title: "Sl", desc: "Slack", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Making custom emojis for Slack 💪🏻" },
  { title: "Wk", desc: "Wikipedia", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "'Wikipedia Wormhole' is a thing. And it is dangerous 🐛" },
  { title: "Sp", desc: "Spotify", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "Choosing the right playlist. (If my Spotify is working... it's always not working)" },
  { title: "Tw", desc: "Twitter", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "If you say something witty, it's going on my Twitter 🐦" },
  { title: "Tc", desc: "Twitch", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "Professional Dota 2 Watcher right here ✌️" },
  { title: "Gt", desc: "GitHub", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Creating GitHub issues, a.k.a. tossing problems to the frontend team" },
  { title: "Yn", desc: "Yarn", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Trying to get yarn working after an update. The main reason I toss issues to the frontend team." },
  { title: "Il", desc: "Illustration", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "A skill I'm trying to learn 🎨... and failing to learn 😛" },
  { title: "Te", desc: "TellyStats", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "Resident Designer. Keeping the diminishing flame of web design in me alive 🕯️" },
  { title: "Wu", desc: "Wunderlist", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "I just need to stop adding items and actually start doing things. Am I the only one who is still using Wunderlist? 😂" },
  { title: "Cv", desc: "Cooking", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "I have zero cooking skills, so I watch cooking videos and never try cooking for real 🍳" },
  { title: "Dg", desc: "Dog Gifs", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "Or any animal gifs, basically. 🐈🐕🦊🦔🦉🐍🐬🦄" },
  { title: "Tg", desc: "Toggl Blog", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "Getting distracted by Toggl comics 🙃" },
  { title: "Gg", desc: "Google", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "I google every damn thing. Including movie spoilers. While watching the movie. Yes." },
  { title: "Ex", desc: "Excel", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "I like spreadsheets so I create them for the smallest reasons 🧐" },
  { title: "So", desc: "StackOv.", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "I still StackOverflow the simplest shit 'just to be sure'. Where will we be without it ❤️" },
  { title: "Cd", desc: "Coding", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "It's very much not my job, but sometimes I stick my hand into the Coding Projects jar 🍪 anyway" },
  { title: "Cp", desc: "Codepen", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "I spend so much time on Codepen, I decided to go Pro because I felt bad 💸" },
  { title: "Tr", desc: "Travel", color: "from-[#37cfdc] to-[#5a88e5]", textColor: "text-[#37cfdc]", tooltip: "We all have that one thing that keeps us alive 🛫🗺️" },
  { empty: true },
  { title: "In", desc: "Instagram", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "It's a terrible love-hate relationship." },
  { title: "Mu", desc: "Musicals", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "Obsessing over musicals and stalking broadway stars is 👏🏻 not 👏🏻 a 👏🏻 crime!" },
  { title: "Me", desc: "Memes", color: "from-[#ff616d] to-[#ffc171]", textColor: "text-[#ff616d]", tooltip: "I learn memes, I make memes, I breathe memes." },
  { title: "No", desc: "Notion", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Battling double columns in Notion" },
  { title: "Re", desc: "Reddit", color: "from-[#f3f9a6] to-[#cbc634]", textColor: "text-[#f3f9a6]", tooltip: "Oh my god. Someone please save me from this Reddit hell hole 😭" },
  { title: "Rd", desc: "Research", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Research & Documentation nobody asks for 🤓📝" },
  { title: "St", desc: "Stats", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Stats. Data. Stats. Data. 📊 Just lots of reporting." },
  { title: "Ad", desc: "Ads", color: "from-[#58ac30] to-[#a7df62]", textColor: "text-[#58ac30]", tooltip: "Ads. Ads. Ads. If you've seen a Toggl ad, it was me. (Sorry)" },
];

interface Props {
  el: ElementType;
}

const ElementWithTooltip: React.FC<Props> = ({ el }) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Partial<{ left: string; right: string; transform: string }>>({
    left: "50%",
    transform: "translateX(-50%)"
  });
  
  const handleMouseEnter = () => {
    if (tooltipRef.current && parentRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
  
      let newPosition: Partial<{ left: string; right: string; transform: string }> = { left: "50%", transform: "translateX(-50%)" };
  
      if (parentRect.left < tooltipRect.width / 2) {
        newPosition = { left: "0%", transform: "translateX(0%)" };
      } else if (parentRect.right > screenWidth - tooltipRect.width / 2) {
        newPosition = { right: "0%", transform: "translateX(0%)" };
      }
  
      setTooltipPosition(newPosition);
    }
  };  

  return (
    <div 
      ref={parentRef} 
      className={`w-[100px] h-[100px] relative group bg-gradient-to-br ${el.color} p-1 cursor-default hover:scale-110 transition-transform`}
      onMouseEnter={handleMouseEnter}
    >
      <div className="bg-[#202e38] p-4 w-full h-full transition-colors duration-300 group-hover:bg-transparent">
        <div className={`text-[32px] font-bold ${el.textColor} group-hover:text-black`}>{el.title}</div>
        <div className={`text-xs font-medium ${el.textColor} group-hover:text-black`}>{el.desc}</div>
      </div>

      <div 
        ref={tooltipRef} 
        style={tooltipPosition} 
        className="absolute bottom-[6.5rem] w-44 bg-white text-gray-800 text-sm p-2 rounded-md shadow-lg z-50 hidden group-hover:flex pointer-events-none"
      >
        {el.tooltip}
      </div>
    </div>
  );
};

const PeriodicTable: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#202e38] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white text-center mt-8">
        My Internet Periodic Table
      </h1>
      <h5 className="text-xl font-light text-white text-center my-6">
        How I waste my time on the Internet
      </h5>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-[1200px] mx-auto justify-center">
        {elements.map((el, index) =>
          el.empty ? (
            <div key={index} className="hidden lg:block"></div> 
          ) : (
            <ElementWithTooltip key={index} el={el} />
          )
        )}
      </div>

      <div className="flex flex-col items-center mt-10 text-white">
        <div className="flex flex-wrap justify-center gap-[25px] items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-[#f3f9a6] to-[#cbc634]"></span>
            <span>Social Media</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-[#58ac30] to-[#a7df62]"></span>
            <span>Serious Work</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-[#37cfdc] to-[#5a88e5]"></span>
            <span>Personal Development</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-gradient-to-br from-[#ff616d] to-[#ffc171]"></span>
            <span>Fun Stuff</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;