"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./projects.css";

const portofolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacityRUnningText2, setOpacityRUnningText2] = useState("opacity-0");

  // Fungsi untuk mengambil posisi scroll
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Menggunakan useEffect untuk mendengarkan event scroll
  useEffect(() => {
    setInterval(function () {
      setOpacityRUnningText2("opacity-1");
    }, 4150);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollPosition);
  return (
    <div className="py-4 w-full relative ">
      <div className="crossline  bg-main w-screen tracking-[0.3em]">
        {" "}
        <div className="title-box-portofolio text-dark border-2  m-auto p-1 font-neuebit overflow-hidden flex relative">
          <div className="running-text flex items-center gap-5 w-full  absolute">
            <p className="portofolio-text-empty">PROJECTS</p>

            <p className="">PROJECTS</p>
          </div>
          <div className={`running-text-2 flex items-center gap-5 w-full ${opacityRUnningText2}`}>
            <p className="portofolio-text-empty">PROJECTS</p>

            <p className="">PROJECTS</p>
          </div>
        </div>
      </div>

      <div className="project-cards bg-grey absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 sm:w-2/4 lg:w-1/4 border-4 border-dark">
        <div class="main-project-cards h-3/4 bg-grey border-dashed border-b-4 border-dark"></div>
        <div class="footer-project-cards bg-main h-1/4"></div>
      </div>
    </div>
  );
};

export default portofolio;
