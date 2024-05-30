import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm Aryan sadeghyan, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a passionate and dedicated full-stack MERN web application
              developer, who embarked on this journey during the pandemic. While
              pursuing my degree in Electrical Engineering, I discovered my
              innate passion for software development, and since then, I have
              been deeply engrossed in honing my skills in this field.
              <br />
              With a solid foundation in both frontend and backend development,
              I specialize in crafting intuitive and robust web applications
              tailored to meet the unique needs of businesses, ranging from
              small startups to large enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
