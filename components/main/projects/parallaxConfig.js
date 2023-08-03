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
        startValue: 10, // Nilai skala mulai
        endValue: 120, // Nilai skala berakhir
        unit: "vh",
        property: "height", // Menggunakan properti "scale" untuk animasi
      },
      {
        startValue: 0,
        endValue: -60,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
  // {
  //   start: ".projects-trigger",
  //   startOffset: "130vh",
  //   duration: "30vh",
  //   properties: [
  //     {
  //       startValue: 50, // Nilai skala mulai
  //       endValue: 100, // Nilai skala berakhir
  //       unit: "%",
  //       property: "width", // Menggunakan properti "scale" untuk animasi
  //     },
  //   ],
  // },
  // {
  //   start: ".projects-trigger",
  //   startOffset: "250vh",
  //   duration: "50vh",
  //   properties: [
  //     {
  //       startValue: 100, // Nilai skala mulai
  //       endValue: 55, // Nilai skala berakhir
  //       unit: "%",
  //       property: "width", // Menggunakan properti "scale" untuk animasi
  //     },
  //   ],
  // },
  {
    start: ".projects-trigger",
    startOffset: "270vh",
    duration: "50vh",
    properties: [
      {
        startValue: 100, // Nilai skala mulai
        endValue: 10, // Nilai skala berakhir
        unit: "vh",
        property: "height", // Menggunakan properti "scale" untuk animasi
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
