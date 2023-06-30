import Image from 'next/image'
import { FaCheckSquare, FaCopy, FaMobile, FaReadme, } from 'react-icons/fa';
import TaskSection from './TaskSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden  md:w-screen lg:w-screen sm:w-screen  from-blue-100 to-teal-500">
      <section className='bg-gradient-to-br from-blue-800 to-teal-500 w-screen z-50'>
        <div className='from-blue-800 to-teal-500'>

          <p className="text-5xl font-bold text-center m-6 text-white">Check your financial health</p>
          <p className="text-2xl font-sans text-center m-2 text-white">
            Use WealthoMeter to get a free report <br /> card for your finances - within minutes!
          </p>
        </div>
        <div className="flex justify-center m-8">
          <button className="rounded-full px-4 py-2 bg-orange-500 text-white font-semibold text-center">Get Started</button>
        </div>



        <div className="relative z-100 overflow-hidden md:shrink-0 sm:shrink-0">
          <div class="flex justify-center">
            <div class="  p-4  underline ml-60">
              <div className='ml-auto'>
                <FaCheckSquare className="text-4xl shrink-0   " />
                <p className="text-lg mr-0 text-white">Expected Retirement Age</p>
                <FaCheckSquare className="text-4xl bg-transparent" />
                <p className="text-lg text-white">Identify Mistakes</p>
              </div>
            </div>

            <div className="relative w-[290px] h-[496px] border-4 border-black shadow-5xl shadow-[#1c3d6d] rounded-[38px] align-middle z-40 md:shrink-0 sm:shrink-0">
  <div className="absolute inset-0 bg-white rounded-[34px] z-50">
    <p className="text-xl mt-10 ml-3 text-cyan-600 font-semibold">Your Financial Health</p>

    <div className="bg-purple-100 mt-5 ml-2 sm:w-[200px] lg:h-[70px] z-50 rounded-lg pl-2 md:shrink-0 sm:shrink-0">
      <p className="text-cyan-600">You are financially coping</p>
      <p className="font-3xl font-bold text-blue-200">
        ---- ----{" "}
        <span className="text-orange-500 shadow-orange-900 font-semibold">----</span>{" "}
        ---- ----
      </p>
    </div>
    <div className="bg-purple-100 mt-5 ml-2 sm:w-[200px] lg:h-[70px] z-50 rounded-lg pl-2 md:shrink-0 sm:shrink-0">
      <p className="text-cyan-600">Percentile Score</p>
      <p className="font-3xl font-bold text-blue-200">
        ---- ---- ---- ----
        <span className="text-teal-500 shadow-teal-900 font-extrabold">----</span>
      </p>
    </div>
    <div className="flex-col items-center z-50">
      <div className="relative mt-5 ml-3">
        <p className="text-teal-600 font-semibold mt-2 md:text-xs">You are expected<br /> to retire at</p>
      </div>
      <button className="rounded-full ml-3 mt-5 px-1 py-1 bg-orange-500 text-white font-semibold">
        Explore my Roadmap
      </button>
      <div className="absolute top-0 left-[50%] transform -translate-x-1/2 w-16 h-6 bg-black rounded-lg"></div>
    </div>
  </div>
</div>

            <div class="flex-shrink-0 w-1/3 p-4 m-2 underline md:shrink-0 sm:shrink-0">
              <FaCheckSquare className="text-4xl bg-transparent top-0" />
              <p className="text-lg">Personalized Roadmap</p>
              <FaCheckSquare className="text-4xl bg-transparent" />
              <p className="text-lg">Tips To Improve</p>


            </div>



          </div>

          <div className="absolute bottom-0 left-0 w-screen h-max z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 40 1100 250" className=" text-[#1c3d6d] relative bottom-0 left-0 w-screen h-max">
              <path fill="#1c3d6d" fillOpacity="1" d="M0,256L40,250.7C80,245,160,235,240,218.7C320,203,400,181,480,192C560,203,640,245,720,224C800,203,880,117,960,122.7C1040,128,1120,224,1200,224C1280,224,1360,128,1400,80L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <div className="bg-[#1c3d6d] w-screen h-88 relative overflow-hidden">
          <div className="bg-[#1c3d6d] h-16"></div>
          <p className="text-4xl font-bold text-center mt-10 text-white">HOW IT WORKS?</p>
          <div className="flex justify-center text-5xl mt-20 text-white">
            <FaCopy className='text-white' />-------------<FaMobile className='text-white' />-------------<FaReadme className='text-white' />
          </div>
          <div className="flex justify-center mt-3 text-sm gap-60 text-white">
            Answer few <br /> questions <span >  Register using <br /> phone and Otp</span>{" "}
            <span className=''>Get report and <br /> personal roadmap</span>
          </div>
          <div className="flex justify-center m-8">
            <button className="rounded-full px-4 py-2 bg-orange-500 text-white font-semibold text-center">
              Get Started
            </button>
          </div>
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
