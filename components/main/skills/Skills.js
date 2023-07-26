import React from "react";
import Plx from "react-plx";
const Skills = () => {
  const textData = [
    {
      start: ".StickyText-trigger",
      duration: "10vh",
      properties: [
        {
          startValue: 0,
          endValue: 25,
          unit: "vh",
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: ".StickyText-trigger",
      startOffset: "40vh",
      duration: "50vh",
      properties: [
        {
          startValue: 25,
          endValue: 5,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
  ];

  return (
    <Plx className="StickyText h-screen mt-96" parallaxData={textData}>
      <div>
        <h2 className="text-grey ">Make elements fly in and stick for some time before they fly out</h2>
      </div>
    </Plx>
  );
};

export default Skills;
