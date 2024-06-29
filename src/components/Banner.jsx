import React from "react";
import banner from "/shyamji.jpg";
import Img from "./Img";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
           <div className="flex flex-col items-center justify-center text-center mt-32">
              <img className="w-full max-w-3xl p-6 border-4 border-dashed border-gray-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200" src={banner} alt="" />
              <h1 className='text-2xl font-semibold md:text-4xl mt-10'>श्री श्याम मंदिर खैरथल, अलवर </h1>
           </div>
        <div className=" w-full mb-10 h-10 ">
        <div className='mt-28 items-center justify-center text-center'>
         
          
        </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
