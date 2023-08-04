const parallaxWidth = [
  {
    start: ".projects-trigger",
    startOffset: "50vh",
    duration: "50vh",
    properties: [
      {
        startValue: 50,
        endValue: 0,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
  {
    start: ".projects-trigger",
    startOffset: "110vh",
    duration: "100vh",
    properties: [
      {
        startValue: 10,
        endValue: 120,
        unit: "vh",
        property: "height",
      },
      {
        startValue: 0,
        endValue: -60,
        unit: "vh",
        property: "translateY",
      },
    ],
  },

  {
    start: ".projects-trigger",
    startOffset: "270vh",
    duration: "50vh",
    properties: [
      {
        startValue: 100,
        endValue: 10,
        unit: "vh",
        property: "height",
      },
      {
        startValue: -50,
        endValue: -5,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
  {
    start: ".projects-trigger",
    startOffset: "320vh",
    duration: "50vh",
    properties: [
      {
        startValue: -5,
        endValue: -60,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
];

export { parallaxWidth };
