"use client";
import React, { useState, useEffect } from "react";

import Hero from "@/components/main/Hero/Hero";
import Aboutme from "@/components/main/about me/Aboutme";
import Projects from "@/components/main/projects/Projects";
import Skills from "@/components/main/skills/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulasi waktu pemuatan untuk "Hero" (Anda dapat mengganti setTimeout dengan pemrosesan data atau pemanggilan API jika diperlukan)
    const fakeLoadingTime = 2000; // 2 detik
    setTimeout(() => {
      setLoading(false);
    }, fakeLoadingTime);
  }, []);
  return (
    <div className={`w-full flex flex-col items-center`}>
      {loading ? (
        // Tampilkan loading screen ketika loading masih true
        <div className="text-grey">Loading...</div>
      ) : (
        // Tampilkan konten utama ketika loading menjadi false
        <>
          <Hero />
          <Aboutme />
          <Projects />
          <Skills />
        </>
      )}
    </div>
  );
}
