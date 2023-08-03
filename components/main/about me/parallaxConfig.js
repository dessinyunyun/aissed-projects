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

export { textABoutme, titleABoutme, titleABoutmeInsideTextAboutmeContainer, titleABoutmeInsideTextAboutmeContainer2 };
