"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-center gap-2 mt-8">
      <div className="title">
        <h1 className="name-title font-regular">Hello. I am Dessi Anwar</h1>
        <h2 className="web-title font-bold tracking-[0.1em] -my-3">WEB DEVELOPER</h2>
      </div>
      <div className="main-div bg-main lg:h-1/4 w-full p-4 lg:p-4 lg:flex">
        <div className="grey-box bg-grey w-full rounded-md lg:rounded-r-2xl lg:rounded-l-none lg:w-2/5 h-32 lg:h-full mb-8 lg:mr-5 flex items-center justify-center">
          <div className="grey-hero font-neuebit text-5xl ">
            <Typewriter
              options={{
                strings: [`<   html />`, `<   style />`, `<   script />`],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="main flex flex-col justify-end  lg:w-3/5">
          <h3 className="javascript-hero-title font-medium tracking-[0.1em]">FULLSTACK . JAVASCRIPT</h3>
          <p className="javascript-hero-desc font-regular">
            Web Knowledge Seeker: <br />
            Embracing Endless Learning Opportunities
          </p>
        </div>
      </div>
      <div className="barcode w-full flex flex-col items-end">
        <Image src={"/hero-barcode.png"} width={150} height={0} alt="Picture of the author" />
        <p className="-mt-3">@2023</p>
      </div>
    </div>
  );
};

export default page;
