import React from "react";
import Image from "next/image";
import "./skils.css";
import Plx from "react-plx";
import { parallaxMainSKilss, parallaxSKilss, parallaxOpeningText, parallaxTitleText } from "./parallaxConfig";
import skillsLogo from "./skillsLogoImagedData";

const Skills = () => {
  const BOXES_PER_ROW = 5;
  const ROWS = 4;
  const BOXES = [];

  for (let i = 0; i < ROWS; i++) {
    BOXES.push([]);
    for (let j = 0; j < BOXES_PER_ROW; j++) {
      const start = 0; // Element starts already rotated and hidden
      const offset = -150; // Element returns to its original position

      BOXES[i].push({
        data: [
          {
            start: ".Pskills",
            startOffset: "450vh",
            duration: "100vh",
            name: "first",
            properties: [
              {
                startValue: -360,
                endValue: 0,
                property: "rotate",
              },
              {
                startValue: 0.3,
                endValue: 1,
                property: "scale",
              },

              {
                startValue: -offset,
                endValue: start,
                property: "translateY",
                unit: "%",
              },
            ],
          },
        ],
      });
    }
  }

  const renderBoxes = (props) => {
    const boxes = [];

    BOXES.forEach((row, index) => {
      row.forEach((box, boxIndex) => {
        boxes.push(
          <Plx {...props} key={`${index} ${boxIndex}`} parallaxData={box.data}>
            <div className="borderSKilss p-2 bg-grey ">
              <Image src={skillsLogo[boxIndex + index * BOXES_PER_ROW].src} alt={skillsLogo[boxIndex + index * BOXES_PER_ROW].alt} width={100} height={50} />
            </div>
          </Plx>
        );
      });
    });

    return boxes;
  };

  const TitleImage = () => {
    return <Image src="/sun-logo-orange.png" alt="orange-logo" width={15} height={50} />;
  };

  return (
    <>
      <div className="Pskills "></div>
      <Plx parallaxData={parallaxOpeningText} className="opening-text">
        <p>LEARNING REMAINS A CHALLENGING AND ENJOYABLE JOURNEY.</p>
      </Plx>
      <Plx parallaxData={parallaxTitleText} className="title-skils">
        <div className="skills-title-container">
          <div className="skilss-title-image-contain">
            <TitleImage />
            <TitleImage />
          </div>
          <h4 className="title-skilss">MY STACK OF SKILLS</h4>
          <div className="skilss-title-image-contain">
            <TitleImage />
            <TitleImage />
          </div>
        </div>
      </Plx>
      <Plx className="skills-container" parallaxData={parallaxSKilss}>
        <Plx className="main-skills" parallaxData={parallaxMainSKilss}>
          {renderBoxes()}
        </Plx>
      </Plx>
    </>
  );
};

export default Skills;
