import React from "react";
import ItemsContainer from "./ItemsContainer";
import Gukesh from '../assets/Gukesh.png';
import Candidates from '../assets/Candidates.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
<div className='bg-[#FBEFE6] flex'>
        <img src={Gukesh} alt="abc" className="h-[850px] w-[750px] pl-4"/>  
        <div className='flex'>
      <h1 className='text-5xl font-semibold p-12'>Gukesh Domraju Most Notable Achievements<br/>
      <h1 className='text-2xl font-semibold pt-6 text-gray-500'>
      Dommaraju Gukesh (born 29 May 2006) is an Indian chess grandmaster. A chess prodigy, he is the third-youngest Grandmaster in history, the third-youngest to reach a chess rating of 2700, the youngest to reach a rating of 2750 and the youngest winner of the FIDE Candidates tournament.Gukesh won the 2024 Candidates Tournament, making him the youngest contender to compete for the title of World Chess Champion.
      <img src={Candidates} alt="abc" className="h-[450px] w-[900px] pt-4"/>  
     </h1>
      </h1>
      </div>
      </div>
    <footer className="bg-[#2D3847] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#c663d3b8] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> Demo session for your child
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Details"
            className="text-pink-00
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
           <Link to='/demo'><button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
           Book Now
          </button>
          </Link>
        </div>
      </div>
      <ItemsContainer/>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span className="text-2xl">© 2024 Chess. All rights reserved.</span>
        <span className="text-xl">Terms · Privacy Policy</span>
       
      </div>
    </footer>
    </>
  );
};

export default Footer;