import React from "react";
import "./aboutme.css";
import Plx from "react-plx";
import { textABoutme, titleABoutme, titleABoutmeInsideTextAboutmeContainer, titleABoutmeInsideTextAboutmeContainer2 } from "./parallaxConfig";

const Aboutme = () => {
  return (
    <div className="aboutmetrigger">
      <Plx className="title-aboutme-heading" parallaxData={titleABoutme}>
        <h4>ABOUT ME</h4>
      </Plx>
      <Plx className="text-aboutme" parallaxData={textABoutme}>
        <Plx className="title-aboutme-inside-text-container-up" parallaxData={titleABoutmeInsideTextAboutmeContainer}>
          <h4 className="title-aboutme-bg">ABOUT ME</h4>
        </Plx>
        <Plx className="title-aboutme-inside-text-container-bottom" parallaxData={titleABoutmeInsideTextAboutmeContainer2}>
          <h4 className="title-aboutme-bg">ABOUT ME</h4>
        </Plx>
        <div className="main-aboutme-text">
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
