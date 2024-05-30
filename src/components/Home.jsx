import "../font.css?inline";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function home() {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      <div className=' h-full max-w-[1000px] mx-auto  px-[50px] flex flex-col justify-center '>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Aryan Sadeghyan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>
          Im a full stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Im a full-stack developer specializing in building and occasionally
          designing) exceptional digital experiences. currentyly, Im focused on
          building responsive full-stack web applications.
        </p>
        <button className='w-[140px] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  );
}
