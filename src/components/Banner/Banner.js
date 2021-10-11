import React from "react";
import "./Banner.css";
import { BsPlayFill } from "react-icons/bs";
import explore from "../video/explore4.mp4";
const Banner = () => {
  return (
    <section class="showcase   h-3/4   lg:h-4/5 2xl:h-2/3 lg:mx-8 sm:mx-8 md:mx-8  2xl:mx-8 ">
      <video
        className="rounded-b-3xl"
        src={explore}
        autoPlay
        muted
        loop
      ></video>
      <div class="overlay rounded-b-3xl"></div>
      {/* Banner text*/}
      <div class="text text-center lg:text-left  z-10 absolute inset-x-0 top-14 lg:top-14   2xl:top-40  flex items-center justify-center ">
        <div>
          <h3 className="2xl:text-5xl"> hi my new friend !</h3>
          <h2 className="mt-6 ">
            {" "}
            Discover my <br /> art space!{" "}
          </h2>
          <button class="bg-transparent mt-5  text   font-extrabold   py-1.5 px-14 border-2 border-white rounded-full">
            Video Resume{" "}
            <BsPlayFill className="inline-block text-lg text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
