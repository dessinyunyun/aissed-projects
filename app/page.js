"use client";
import React from "react";

import Hero from "@/components/main/Hero/Hero";
import Aboutme from "@/components/main/about me/Aboutme";
import Projects from "@/components/main/projects/Projects";
import Skills from "@/components/main/skills/Skills";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <>
        <Hero />
        <Aboutme />
        {/* <Card /> */}
        <Projects />
        <Skills />
      </>
    </div>
  );
}
