import React, { useRef, useState } from "react";
const projectsData = [
  {
    image: "/projects/mitsubishi.jpg",
    title: "DEALER CAR",
    ref: useRef(null),
    desc: "provides information products and services",
    z: 1,
    defaultPosition: { x: 0, y: 0 },
  },
  {
    image: "/projects/lentera-inovasi.jpg",
    title: "IT SOLUTION",
    ref: useRef(null),
    desc: "provides information products and services",
    z: 2,
    defaultPosition: { x: 0, y: 0 },
  },
  {
    image: "/projects/SMS.jpg",
    title: "CONSTRUCTION",
    defaultPosition: { x: 0, y: 0 },
    ref: useRef(null),
    desc: "provides information products and services",
    z: 3,
  },
];

export default projectsData;
