"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./aboutme.css";
import Plx from "react-plx";

const Aboutme = () => {
  const textABoutme = [
    {
      start: ".aboutmetrigger",
      startOffset: "145vh",
      duration: "80vh",
      properties: [
        {
          startValue: 100,
          endValue: 0,
          unit: "vw",
          property: "translateX",
        },
        {
          startValue: "#0F0F0F",
          endValue: "#E7E7E7",
          property: "color",
        },
      ],
    },
    {
      start: ".aboutmetrigger",
      startOffset: "350vh",
      duration: "80vh",
      properties: [
        {
          startValue: 0,
          endValue: -100,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
  ];

  const titleABoutme = [
    {
      start: ".aboutmetrigger",
      startOffset: "50vh",
      duration: "50vh",
      properties: [
        {
          startValue: 50,
          endValue: -15,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    {
      start: ".aboutmetrigger",
      startOffset: "140vh",
      duration: "180vh",
      properties: [
        {
          startValue: 0,
          endValue: -100,
          unit: "vw",
          property: "translateX",
        },
      ],
    },
  ];

  const titleABoutmeInsideTextAboutmeContainer = [
    {
      start: ".aboutmetrigger",
      startOffset: "50vh",
      duration: "50vh",
      properties: [
        {
          startValue: 50,
          endValue: -15,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    {
      start: ".aboutmetrigger",
      startOffset: "10vh",
      duration: "50vh",
      properties: [
        {
          startValue: -200,
          endValue: -200,
          unit: "vh",
          property: "translateX",
        },
      ],
    },
    {
      start: ".aboutmetrigger",
      startOffset: "120vh",
      duration: "100vh",
      properties: [
        {
          startValue: -100,
          endValue: -20,
          unit: "vw",
          property: "translateX",
        },
      ],
    },
  ];
  const titleABoutmeInsideTextAboutmeContainer2 = [
    {
      start: ".aboutmetrigger",
      startOffset: "50vh",
      duration: "50vh",
      properties: [
        {
          startValue: 50,
          endValue: 15,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
    // {
    //   start: ".aboutmetrigger",
    //   startOffset: "10vh",
    //   duration: "50vh",
    //   properties: [
    //     {
    //       startValue: -200,
    //       endValue: -200,
    //       unit: "vh",
    //       property: "translateX",
    //     },
    //   ],
    // },
    {
      start: ".aboutmetrigger",
      startOffset: "140vh",
      duration: "100vh",
      properties: [
        {
          startValue: 100,
          endValue: 20,
          unit: "vw",
          property: "translateX",
        },
      ],
    },
  ];

  return (
    <div className="aboutmetrigger w-full font-montreal">
      <Plx className="title-aboutme fixed w-full top-1/2" parallaxData={titleABoutme}>
        <h4 className="font-bold text-center tracking-[0.05em]">ABOUT ME</h4>
      </Plx>
      <Plx className="fixed text-aboutme flex justify-center items-center w-full top-0 overflow-hidden bg-dark" parallaxData={textABoutme}>
        <Plx className="title-aboutme-inside-text-container fixed w-full top-1/2 text-dark z-0" parallaxData={titleABoutmeInsideTextAboutmeContainer}>
          <h4 className="font-bold text-center tracking-[0.05em]">ABOUT ME</h4>
        </Plx>
        <Plx className="title-aboutme-inside-text-container-2 text-main fixed w-full top-1/2  z-0" parallaxData={titleABoutmeInsideTextAboutmeContainer2}>
          <h4 className="font-bold text-center tracking-[0.05em]">ABOUT ME</h4>
        </Plx>
        <div className="p-6 mt-5 w-full rounded-3xl font-medium tracking-[0.1em] relative">
          <p className="mb-2">
            After working as a graphic designer at a renowned media company in my city, I developed a keen interest in the world of application development. I am delighted to merge both my skills: Design and Programming. Each day is an
            exciting journey as I continuously learn new things.
          </p>
        </div>
      </Plx>
    </div>
  );
};

export default Aboutme;
