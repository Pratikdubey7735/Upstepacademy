import React,{useState} from 'react'
import Certificate from '../assets/Certificate.png';
import ctrking from '../assets/ctrking.png';
import ctrqueen from '../assets/ctrqueen.png';
import ctrbishob from '../assets/ctrbishob.png';
import ctrknight from '../assets/ctrknight.png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
function Levels() {
    const [counterOn,setCounterOn]=useState(false);
  return (
  <>
  
    <div className='bg-[#FBEFE6] flex'>
        <img src={Certificate} alt="abc" className="h-[650px] w-[650px] pl-4"/>  
        <div className='flex'>
      <h1 className='text-5xl font-semibold p-12'>Viswanathan Anand’s Most Notable Achievements<br/>
      <h1 className='text-xl font-semibold pt-6'>
     1.Anand is the first Indian to earn the World Junior Chess Championship title in 1987. <br />
     2.Became the first Indian grandmaster in 1988. <br />
     3. He Won the World Chess Championship five times (2000, 2002, 2007, 2008, 2010) <br/>
     4.Reached a peak Elo rating of 2820, the highest in the world at the time. <br/>
     5.Won the FIDE World Rapid Chess Championship in 2017. <br/>
     6.Won the Chess World Cup in 2000 and 2005. <br/>
     7.Won the Tata Steel Chess Tournament five times (2003, 2004, 2006, 2008, 2010) <br />
     8.Won the Corus Chess Tournament three times (1998, 2006, 2008). <br/>
     9.Won the Linares Chess Tournament twice (1998, 2008) <br/>
     10.Won the Dortmund Chess Tournament twice (1996, 2004) <br/>
     11.Won the Wijk aan Zee Chess Tournament twice (1998, 2003) <br/>
     12.Won the Grand Slam Chess Tournament in 2012. <br />
     13.Apart from innumerable chess titles, he has also won prestigious awards like the Padma Shri, Arjuna Award, Padma Bhushan and the Padma Vibhushan.
     </h1>
      </h1>
      </div>
      </div>
      <div className='bg-[#88b6e8] h-[550px]'>
        <h1 className='text-4xl font-bold pl-[550px] underline'>Top 5 Chess Grandmaster List From World (2024)</h1>
        <div className='bg-[#c4eb71] pt-4 pl-4'>
        <h3  className='text-4xl pl-[10px]'>1. GM. Magnus Carlsen (2830) Norway</h3>
        <h3  className='text-4xl pl-[10px]'>2. GM. Fabiano Caruana (2805) United States</h3>
        <h3  className='text-4xl pl-[10px]'>3. GM. Hikaru Nakamura (2794) United Nation</h3>
        <h3  className='text-4xl pl-[10px]'>4. GM. Ian Nepomniachtchi (2770) Russia</h3>
        <h3  className='text-4xl pl-[10px]'>5. GM. Gukesh Dommaraju (2763) India</h3>
        </div>
      
        <div className='bg-[#e18c4b]'>
        <h1 className='text-4xl font-bold pl-[550px] underline'>Top 5 Chess Grandmaster List From India (2024)</h1>
        <div className='bg-[#c4eb71] pt-4 pl-4'>
        <h3  className='text-4xl pl-[10px]'>1. GM. Erigaisi Arjun (2756) </h3>
        <h3  className='text-4xl pl-[10px]'>2. GM. Anand Vishwanathan (2751)</h3>
        <h3  className='text-4xl pl-[10px]'>3. GM. Praggnanandhaa R (2747) </h3>
        <h3  className='text-4xl pl-[10px]'>4. GM. Gukesh Dommaraju (2743)</h3>
        <h3  className='text-4xl pl-[10px]'>5. GM. Vidit Santosh Gujrathi (2727)</h3>
        </div>
      </div>
      </div>
      <h1 className='text-4xl font-bold pl-[725px] pt-4 underline'>Our Training Record</h1>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <div className='m-4 mx-auto'>
        <div class="grid grid-cols-4 divide-x">
            <div class='bg-[#2D3847] flex items-center justify-center rounded-tl-lg'>
                <p className='text-yellow-600 font-bold flex text-center mx-auto'>
                    {counterOn && <CountUp start={0} end={21252} duration={3} delay={0} className='text-4xl mr-2'/>} 
                    <span className='text-2xl m-1 text-white'>Students Trained</span>
                </p>  
            </div>
            <div class='flex items-center justify-center mx-auto'>
                <img src={ctrking} alt="abc" className="m-6"/>
            </div>
            <div class='bg-[#2D3847] flex items-center justify-center rounded-tl-lg'>
                <p className='text-yellow-600 font-bold flex text-center mx-auto'>
                    {counterOn && <CountUp start={0} end={216} duration={3} delay={0} className='text-4xl mr-2'/>} 
                    <span className='text-2xl m-1 text-white'>Tournaments Organized</span>
                </p>  
            </div>
            <div class='flex items-center justify-center mx-auto'> 
                <img src={ctrqueen} alt="abc"/>
            </div>
        </div>
        <div class="grid grid-cols-4 divide-x mt-0">
            <div class='flex items-center justify-center mx-auto'> 
                <img src={ctrbishob} alt="abc"/>
            </div>
            <div class='bg-[#2D3847] flex items-center justify-center rounded-tl-lg'>
                <p className='text-yellow-600 font-bold flex text-center mx-auto'>
                    {counterOn && <CountUp start={0} end={43} duration={3} delay={0} className='text-4xl mr-2'/>}
                    <span className='text-2xl m-1 text-white'>Training Centers</span>
                </p>  
            </div>
            <div class='flex items-center justify-center mx-auto'> 
                <img src={ctrknight} alt="abc" className="m-6"/>
            </div>
            <div class='bg-[#2D3847] flex items-center rounded-tl-lg'>
                <p className='text-yellow-600 font-bold flex text-center mx-auto'>
                    {counterOn && <CountUp start={0} end={26} duration={3} delay={0} className='text-4xl mr-2'/>}
                    <span className='text-2xl m-1 text-white'>ASSOCIATED SCHOOLS</span>
                </p>  
            </div>
        </div>
    </div>
</ScrollTrigger>

      </>
  )
}
export default Levels
