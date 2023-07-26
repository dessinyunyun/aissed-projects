"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./projects.css";
import Plx from "react-plx";

const Projects = () => {
  const parallaxWidth = [
    {
      start: ".Pposition",
      startOffset: "50vh",
      duration: "50vh",
      properties: [
        {
          startValue: 50,
          endValue: 0,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    {
      start: ".Pposition",
      startOffset: "110vh",
      duration: "50vh",
      properties: [
        {
          startValue: 20, // Nilai skala mulai
          endValue: 120, // Nilai skala berakhir
          unit: "vh",
          property: "height", // Menggunakan properti "scale" untuk animasi
        },
        {
          startValue: 0,
          endValue: -60,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    {
      start: ".Pposition",
      startOffset: "170vh",
      duration: "50vh",
      properties: [
        {
          startValue: 50, // Nilai skala mulai
          endValue: 100, // Nilai skala berakhir
          unit: "%",
          property: "width", // Menggunakan properti "scale" untuk animasi
        },
      ],
    },
    {
      start: ".Pposition",
      startOffset: "230vh",
      duration: "50vh",
      properties: [
        {
          startValue: 100, // Nilai skala mulai
          endValue: 55, // Nilai skala berakhir
          unit: "vw",
          property: "width", // Menggunakan properti "scale" untuk animasi
        },
      ],
    },
    {
      start: ".Pposition",
      startOffset: "280vh",
      duration: "50vh",
      properties: [
        {
          startValue: 100, // Nilai skala mulai
          endValue: 10, // Nilai skala berakhir
          unit: "vh",
          property: "height", // Menggunakan properti "scale" untuk animasi
        },
        {
          startValue: -50,
          endValue: -5,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    {
      start: ".Pposition",
      startOffset: "330vh",
      duration: "50vh",
      properties: [
        {
          startValue: -5,
          endValue: -60,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
  ];

  const [opacityRUnningText2, setOpacityRUnningText2] = useState("opacity-0");

  useEffect(() => {
    setInterval(function () {
      setOpacityRUnningText2("opacity-1");
    }, 4150);
  }, []);

  // console.log(scrollPosition);
  return (
    <div className="Pposition h-screen flex justify-center mt-92">
      <Plx className="width overflow-hidden bg-grey Projects-container flex justify-center items-center fixed top-1/2" parallaxData={parallaxWidth}>
        {/* <Plx className="height" parallaxData={parallaxHeight}> */}

        <div className="py-4 w-full">
          <div className="crossline  bg-main w-full tracking-[0.3em]">
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
      </Plx>
    </div>
  );
};

export default Projects;
