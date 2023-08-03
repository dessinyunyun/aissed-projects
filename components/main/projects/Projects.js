"use client";

import React, { useState, useEffect } from "react";
import { parallaxWidth } from "./parallaxConfig";
import "./projects.css";
import Plx from "react-plx";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [opacityRUnningText2, setOpacityRUnningText2] = useState("opacity-0");
  useEffect(() => {
    setInterval(function () {
      setOpacityRUnningText2("opacity-1");
    }, 4150);
  }, []);

  // console.log(scrollPosition);
  return (
    <div className="projects-trigger mt-92">
      <Plx className="projects-container relative" parallaxData={parallaxWidth}>
        <div className="w-full ">
          <div className="crossline">
            {" "}
            <div className="title-box-portofolio">
              <div className="running-text">
                <p className="portofolio-text-empty">PROJECTS</p>

                <p className="">PROJECTS</p>
              </div>
              <div className={`running-text-2 ${opacityRUnningText2}`}>
                <p className="portofolio-text-empty">PROJECTS</p>
                <p className="">PROJECTS</p>
              </div>
            </div>
          </div>
          <ProjectsCard />
        </div>
      </Plx>
    </div>
  );
};

export default Projects;
