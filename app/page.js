import Image from 'next/image'
import { FaCheckSquare,FaCopy, FaMobile, FaReadme, } from 'react-icons/fa';
import TaskSection from './TaskSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden  from-blue-100 to-teal-500">
<section className='bg-gradient-to-br from-blue-800 to-teal-500 w-screen z-50'>
  <div className='from-blue-800 to-teal-500'>

    <p className="text-5xl font-bold text-center m-6">Check your financial health</p>
    <p className="text-2xl font-sans text-center m-2">
      Use WealthoMeter to get a free report <br /> card for your finances - within minutes!
    </p>
  </div>
  <div className="flex justify-center m-8">
    <button className="rounded-full px-4 py-2 bg-orange-500 text-white font-semibold text-center">Get Started</button>
  </div>




  <div class="flex justify-center">
    <div class="  p-4  underline ml-60">
<div className='ml-auto'>
<FaCheckSquare className="text-4xl shrink-0   " />
      <p className="text-lg mr-0">Expected Retirement Age</p>
      <FaCheckSquare className="text-4xl bg-transparent" />
      <p className="text-lg">Identify Mistakes</p>
</div>
    </div>

    <div className=" relative w-[290px] h-[496px] border-4 border-black shadow-2xl shadow-black rounded-[38px]  align-middle z-50 md:shrink-0 sm:shrink-0  ">
      <div className="absolute inset-0 bg-white rounded-[34px] z-50 ">
        <p className="text-xl mt-10 ml-3 text-cyan-600 font-semibold">Your Financial Health</p>


        <div className="bg-purple-100 mt-5 ml-2 sm:w-[200px] lg:h-[70px] z-50 rounded-lg pl-2">
          <p className="text-cyan-600">You are financially coping</p>
          <p className="font-3xl font-bold text-blue-200">
            ---- ----{" "}
            <span className="text-orange-500 shadow-orange-900 font-semibold">----</span>{" "}
            ----
          </p>
        </div>
        <div className="bg-purple-100 mt-5 ml-3 lg:w-[200px] lg:h-[70px] rounded-lg pl-2 z-50 ">
          <p className="text-cyan-600">Percentile Score</p>
          <p className="font-3xl font-bold text-blue-200">
            ---- ---- ---- ----
            <span className="text-teal-500 shadow-teal-900 font-extrabold">----</span>
          </p>
        </div>
        <div className="flex-col items-center z-50">
          <div className="relative mt-5 ml-3">
        
            <p className="text-teal-600 font-semibold mt-2 md:text-xs">
              You are expected<br /> to retire at
            </p>
          </div>
          <button className="rounded-full ml-3 mt-5 px-1 py-1 bg-orange-500 text-white font-semibold">
            Explore my Roadmap
          </button>
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2 w-16 h-6 bg-black rounded-lg"></div>
        </div>
      </div>


    </div>

    <div class="flex-shrink-0 w-1/3 p-4 m-2 underline">
      <FaCheckSquare className="text-4xl bg-transparent top-0" />
      <p className="text-lg">Personalized Roadmap</p>
      <FaCheckSquare className="text-4xl bg-transparent" />
      <p className="text-lg">Tips To Improve</p>
      

    </div>



  </div>

</section>

<section className="bg-blue-900 w-screen h-88 relative overflow-hidden">
  <div className="wave bg-blue-900 h-16"></div>
  <p className="text-4xl font-bold text-center mt-10">HOW IT WORKS?</p>
  <div className="flex justify-center text-5xl mt-20">
    <FaCopy />----------<FaMobile />------------<FaReadme />
  </div>
  <div className="flex justify-center mt-2 text-sm gap-52">
    Answer few <br /> questions <span >  Register using <br /> phone and Otp</span>{" "}
    <span className=''>Get report and <br /> personal roadmap</span>
  </div>
  <div className="flex justify-center m-8">
    <button className="rounded-full px-4 py-2 bg-orange-500 text-white font-semibold text-center">
      Get Started
    </button>
  </div>
</section>





<section className='bg-gradient-to-br w-screen '>
  <div className='mt-12 font-bold text-lg'>
    <TaskSection /> 
  </div>
</section>


    </main>


  )
}
