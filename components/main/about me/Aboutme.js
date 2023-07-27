"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./aboutme.css";

const Aboutme = () => {
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
    }, 7150);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="aboutme-contain">
      <div className={`aboutme-main bg-dark h-fit py-20 pb-40`}>
        <div className="title-box-aboutme text-grey border-2 tracking-[0.1em] border-grey w-10/12 m-auto p-1 font-neuebit overflow-hidden flex relative">
          <div className="running-text flex items-center gap-5 w-full  absolute">
            <h4 className="aboutme-text-empty">About Me</h4>
            <div className="image-aboutme">
              <Image className="" src={"/sun-logo-grey.png"} fill={true} alt="Logo" />
            </div>
            <h4 className="">About Me</h4>
          </div>
          <div className={`running-text-2 flex items-center gap-5 w-full ${opacityRUnningText2}`}>
            <h4 className="aboutme-text-empty">About Me</h4>
            <div className="image-aboutme">
              <Image className="" src={"/sun-logo-grey.png"} fill={true} alt="Logo" />
            </div>
            <h4 className="">About Me</h4>
          </div>
        </div>
        <div className="main-text-aboutme p-6 mt-5 bg-grey w-10/12 m-auto ">
          <p className="mb-2">
            I am a web developer with a strong background in website development. My degree in Information Systems has provided the foundation for my expertise in developing technological solutions. Additionally, I have completed a
            certified web developer training program facilitated by the government and successfully finished a boot camp that enhanced my knowledge and skills.
          </p>
          <p className="mb-2">As a fullstack JavaScript developer, I can deliver comprehensive solutions from the front-end to the back-end. I have prior experience as a freelancer and have been involved in various successful projects.</p>
          <p className="mb-2">
            Before focusing on web development, I pursued a career as a graphic designer at a renowned media company in my city. This experience has given me unique insights into integrating attractive designs with functionality in my web
            projects.
          </p>
          <p>Currently, I lean more towards the front-end development field. I am enthusiastic about creating appealing, interactive, and responsive user interfaces.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
