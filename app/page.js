"use client";
import React, { useEffect, useState, useRef } from "react";

import Hero from "@/components/main/Hero/Hero";
import Aboutme from "@/components/main/about me/Aboutme";
import Projects from "@/components/main/projects/Projects";
import Skills from "@/components/main/skills/Skills";

export default function Home() {
  // ---------------------------------------------- HERO ----------------------------------------------
  const HeroDiv = useRef(null);
  const [HeroviewportPercentage, setHeroViewportPercentage] = useState(0);
  const heroScrool = () => {
    const heroDivTop = HeroDiv.current.getBoundingClientRect().top;
    const heroviewportHeight = window.innerHeight;
    const heropercentage = 1 - heroDivTop / heroviewportHeight;
    setHeroViewportPercentage(heropercentage);
  };

  // ---------------------------------------------- PROJECST ----------------------------------------------
  const ProjectsDiv = useRef(null);
  const [projectsActivated, setprojectsActivated] = useState(false);
  const [ProjectsviewportPercentage, setProjectsViewportPercentage] = useState(0);
  const [ProjectsWidth, setProjectsWidth] = useState(20);
  const [ProjectsHeight, setProjectsHeight] = useState(20);

  const projectsScrool = () => {
    const ProjectsDivTop = ProjectsDiv.current.getBoundingClientRect().top;
    const ProjectsviewportHeight = window.innerHeight;
    const Projectspercentage = 1 - ProjectsDivTop / ProjectsviewportHeight;

    setProjectsViewportPercentage(Projectspercentage);

    // Mengubah lebar dan tinggi div projects-container berdasarkan persentase scroll
    // console.log("Projectspercentage", Projectspercentage);
    console.log("ProjectsDivTop", ProjectsDivTop);
    setprojectsActivated(ProjectsHeight > 100 ? true : false);

    // Ketika top dari ProjectsDiv berada di atas atau sama dengan -300px
    // dan scroll masih berada dalam div Projects-container
    if (projectsActivated === true) {
      console.log("projectsActivated ---------> ");
      if (ProjectsDivTop > 150 && ProjectsDivTop < 250) {
        const newWidth = 80 - Projectspercentage * 50;
        console.log("widthkeluar", newWidth);
        const limitedWidth = Math.max(20, newWidth);
        setProjectsWidth(limitedWidth);
      } else if (ProjectsDivTop > 250) {
        const newHeight = 80 - Projectspercentage * 50;
        const limitedHeight = Math.max(20, newHeight);
        console.log("heightkeluar", limitedHeight);
        setProjectsHeight(limitedHeight);
      }
    } else if (projectsActivated == false) {
      console.log("projects Not Activated ---------> ");
      if (Projectspercentage < 0.8) {
        const newWidth = 70 + Projectspercentage * 50;
        const limitedWidth = Math.min(100, newWidth);
        setProjectsWidth(limitedWidth);
      } else {
        const newHeight = 65 + Projectspercentage * 50;
        const limitedHeight = Math.min(130, newHeight);
        setProjectsHeight(limitedHeight);
      }
    }
  };

  const handleScroll = () => {
    heroScrool();
    projectsScrool();
  };
  // Menggunakan useEffect untuk mendengarkan event scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("projectsActivated", projectsActivated);
  // console.log("ProjectsWidth", ProjectsWidth);
  // console.log("ProjectsHeight", ProjectsHeight);
  // console.log("ProjectsviewportPercentage", ProjectsviewportPercentage);

  return (
    <div className={`w-full flex flex-col items-center`}>
      <div
        ref={HeroDiv}
        className={`hero-container bg-grey`}
        style={{
          width: "100%",
          height: "130vh",
          opacity: HeroviewportPercentage > 1 ? 1 - HeroviewportPercentage + 0.3 : 1,
          transition: "opacity 0.5s",
        }}
      >
        <Hero />
      </div>
      <Aboutme />

      <div
        ref={ProjectsDiv}
        className={`Projects-container bg-grey flex justify-center items-center overflow-hidden mt-80`}
        style={{
          width: `${ProjectsWidth}vw`,
          height: `${ProjectsHeight}vh`,
          transition: "width 0.5s, height 0.5s", // Gunakan transition untuk efek animasi lebar dan tinggi
        }}
      >
        <Projects />
      </div>

      <Skills />
    </div>
  );
}
