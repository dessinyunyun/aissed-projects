import React from "react";
import Image from "next/image";
import "./skils.css";
import Plx from "react-plx";

const Skills = () => {
  const skillsLogo = [
    {
      src: "/skills/js.png",
      alt: "resApi",
    },
    {
      src: "/skills/typescript.png",
      alt: "resApi",
    },
    {
      src: "/skills/node.png",
      alt: "resApi",
    },
    {
      src: "/skills/git.png",
      alt: "resApi",
    },
    {
      src: "/skills/github.png",
      alt: "resApi",
    },
    {
      src: "/skills/react.png",
      alt: "resApi",
    },
    {
      src: "/skills/nextJS.png",
      alt: "resApi",
    },
    {
      src: "/skills/redux.png",
      alt: "resApi",
    },
    {
      src: "/skills/bootstrap.png",
      alt: "resApi",
    },
    {
      src: "/skills/tailwind.png",
      alt: "resApi",
    },
    {
      src: "/skills/api.png",
      alt: "resApi",
    },
    {
      src: "/skills/axios.png",
      alt: "resApi",
    },
    {
      src: "/skills/express.png",
      alt: "resApi",
    },
    {
      src: "/skills/nest.png",
      alt: "resApi",
    },
    {
      src: "/skills/sequelize.png",
      alt: "resApi",
    },
    {
      src: "/skills/postgree.png",
      alt: "resApi",
    },
    {
      src: "/skills/mongodb.png",
      alt: "resApi",
    },
    {
      src: "/skills/wordpress.png",
      alt: "resApi",
    },
    {
      src: "/skills/figma.png",
      alt: "resApi",
    },
    {
      src: "/skills/photoshop.png",
      alt: "resApi",
    },
  ];

  const BOXES_PER_ROW = 5;
  const ROWS = 4;
  const BOXES = [];

  for (let i = 0; i < ROWS; i++) {
    BOXES.push([]);
    for (let j = 0; j < BOXES_PER_ROW; j++) {
      // Parallax effect calculations...
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
              // {
              //   startValue: 0,
              //   endValue: 1,
              //   property: "opacity",
              // },
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
              // {
              //   startValue: -offset,
              //   endValue: start,
              //   property: "translateX",
              //   unit: "%",
              // },
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
            <div className="borderSKilss p-2 bg-grey spinner">
              <Image src={skillsLogo[boxIndex + index * BOXES_PER_ROW].src} alt={skillsLogo[boxIndex + index * BOXES_PER_ROW].alt} width={100} height={50} />
            </div>
          </Plx>
        );
      });
    });

    return boxes;
  };

  const parallaxMainSKilss = [
    {
      start: ".Pskills",
      startOffset: "450vh",
      duration: "100vh",
      properties: [
        {
          startValue: 100,
          endValue: 20,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
  ];

  const parallaxSKilss = [
    {
      start: ".Pskills",
      startOffset: "380vh",
      duration: "100vh",
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];

  const parallaxOpeningText = [
    {
      start: ".Pskills",
      startOffset: "50vh",
      duration: "50vh",
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: ".Pskills",
      startOffset: "200vh",
      duration: "50vh",
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const parallaxTitleText = [
    {
      start: ".Pskills",
      startOffset: "280vh",
      duration: "50vh",
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: ".Pskills",
      startOffset: "350vh",
      duration: "50vh",
      properties: [
        {
          startValue: 0,
          endValue: -40,
          unit: "vh",
          property: "translateY",
        },
      ],
    },
  ];

  return (
    <>
      <div className="Pskills "></div>
      <Plx parallaxData={parallaxOpeningText} className="opening-text fixed top-1/2">
        <p className="text-grey font-bold text-center">LEARNING REMAINS A CHALLENGING AND ENJOYABLE JOURNEY.</p>
      </Plx>
      <Plx parallaxData={parallaxTitleText} className="title-skils w-full fixed top-1/2 z-10">
        <div className="skills-title  flex justify-center items-center gap-3">
          <div className="flex gap-1">
            <Image src="/sun-logo-orange.png" alt="orange-logo" width={15} height={50} />
            <Image src="/sun-logo-orange.png" alt="orange-logo" width={15} height={50} />
          </div>
          <h4 className="text-grey text-center tracking-[0.3em] font-bold">MY STACK OF SKILLS</h4>
          <div className="flex gap-1">
            <Image src="/sun-logo-orange.png" alt="orange-logo" width={15} height={50} />
            <Image src="/sun-logo-orange.png" alt="orange-logo" width={15} height={50} />
          </div>
        </div>
      </Plx>
      <Plx className="skills-container w-full h-screen flex flex-col justify-center items-center fixed top-0 " parallaxData={parallaxSKilss}>
        <Plx className="main-skills grid grid-cols-4 place-content-center p-10 md:grid-cols-6 fixed" parallaxData={parallaxMainSKilss}>
          {renderBoxes()}
        </Plx>
      </Plx>
    </>
  );
};

export default Skills;
