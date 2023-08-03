const parallaxMainSKilss = [
  {
    start: ".Pskills",
    startOffset: "450vh",
    duration: "100vh",
    properties: [
      {
        startValue: 100,
        endValue: 15,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
];

const parallaxSKilss = [
  {
    start: ".Pskills",
    startOffset: "350vh",
    duration: "10vh",
    properties: [
      {
        startValue: 100,
        endValue: 0,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
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

export { parallaxMainSKilss, parallaxSKilss, parallaxOpeningText, parallaxTitleText };
