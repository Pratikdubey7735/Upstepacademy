import React, { useState } from "react";
import logo1 from '../assets/logo1.webp';
import chess from '../assets/chess.png';
import Anand from '../assets/Anand.jpg';
import { HiMenuAlt3, HiPuzzle } from "react-icons/hi";
import { MdCastForEducation, MdLeaderboard, MdOnlinePrediction, MdOutlineDashboard } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { RiWifiOffLine } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Home = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Demo", link: "/demo", icon: MdCastForEducation },
    { name: "Puzzles", link: "/puzzles", icon: HiPuzzle},
    { name: "Play Vs 2 Player", link: "/offline", icon: RiWifiOffLine, margin: true },
    { name: "Play vs Computer", link: "/game", icon: MdOnlinePrediction },
    { name: "Leaderboard", link: "/leaderboard", icon: MdLeaderboard },
    { name: "Payfees", link: "https://rzp.io/l/hzUwXkeH", icon:FaRupeeSign , margin: true },
    { name: "Learn", link: "/learn", icon: FaBookOpen },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-[100px,1fr]">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-28"
        } duration-500 text-gray-100 px-4 z-10`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className={`cursor-pointer ${open && "opacity-1"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={`mt-4 flex flex-col gap-4 relative ${open ? "bg-[#0e0e0e]" : ""}`}>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-30 "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div>
      <div className="bg-[#2EA3F2] h-10">
        <div className="flex p-2 px-16 text-gray-100 text-xl">
          <div className="flex">
        <FiPhoneCall size={26}/><span className="px-1">  
        8299478939
        </span>
        </div>
        <div className="flex px-[40px] cursor-pointer hover:filter-blur-md transition-all duration-300">
      <MdEmail size={26} />
      <span className="px-1">info@Chess.com</span>
    </div>
        </div>
      </div>
      <div className={`flex bg-orange-100 h-28 px-4 ${open ? "w-full" : ""}`}>
        <img src={logo1} alt="abc" className="w-[200px]" />
        <div className="flex items-center justify-between  pl-[900px]">
      <Link to='/demo'><button className=" bg-pink-500 py-[10px] px-[30px] rounded-[30px] text-white font-xl font-bold hover:bg-slate-500">BOOK DEMO CLASS</button>
      </Link>  
        <div className="pl-[15px]"> 
        <Link to='/game'> <button className=" bg-pink-500 py-[10px] px-[40px] rounded-[30px] text-white font-xl font-bold hover:bg-slate-500">PLAY GAME</button>
        </Link> 
        </div>
       
        </div>
      </div>
      <div className={`flex h-28 px-4 ${open ? "w-full" : ""}`}>
        <img src={Anand} alt="abc" className="h-[700px] w-[814px] pt-1"/>
       <p className="m-4">
        <h1 className="text-4xl font-bold mt-4">Chess is a game of patience, not of genius.</h1>
        <div className="mt-4">
        <span className="text-xl mt-8">Chess is one of the few sports that can be learnt online really well with guided training, practice and analysis. Learning it online helps in visualising the pattern and possible moves.In chess, there are some extremely beautiful things in the domain of movement, but not in the visual domain. It's the imagining of the movement or of the gesture that makes the beauty in this case.</span>
        <img src={chess} alt="abc" className="h-[400px] w-[785px]" />
        </div>
       </p>
      </div>
      </div>

    </div>
  );
};

export default Home;
