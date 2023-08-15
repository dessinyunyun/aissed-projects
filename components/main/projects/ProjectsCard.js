import Draggable from "react-draggable";
import React, { useRef, useState } from "react";
import "./projectscard.css";
import Image from "next/image";
const ProjectsCard = () => {
  const [cards, setCards] = useState([
    {
      image: "/projects/mitsubishi.jpg",
      title: "DEALER CAR",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 1,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/mitsubishi-barcode.png",
    },
    {
      image: "/projects/lentera-inovasi.jpg",
      title: "IT SOLUTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 2,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/lenterainovasi-barcode.png",
    },
    {
      image: "/projects/SMS.jpg",
      title: "CONSTRUCTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 3,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/SMS-barcode.png",
    },
    {
      image: "/projects/hnsi.jpg",
      title: "FISHERS' ORGANIZATION",
      ref: useRef(null),
      desc: "HNSI Identity Website.",
      z: 4,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/hnsi-barcode.png",
    },
    {
      image: "/projects/todolist.jpg",
      title: "TODOLIST",
      ref: useRef(null),
      desc: "Organize tasks effortlessly with ToDoList.",
      z: 5,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/hnsi-barcode.png",
    },
  ]);

  const eventLogger = (e, data, index) => {
    if (data.lastX > 100 || data.lastX < -100) {
      setCards((prevCards) =>
        prevCards.map((card, idx) => {
          if (idx === index) {
            return {
              ...card,
              defaultPosition: { x: data.lastX > 100 ? 450 : -450, y: 0 },
            };
          }
          return card;
        })
      );

      changeIndexCard();
      changePositionDefaultCard(index);
    }
  };

  const changePositionDefaultCard = (indexCardActive) => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card, idx) => {
          if (idx === indexCardActive) {
            return {
              ...card,
              defaultPosition: { x: 0, y: 0 },
            };
          }
          return card;
        })
      );
    }, 200);
  };

  const changeIndexCard = () => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        const newZ = card.z === cards.length ? 1 : card.z + 1;
        return {
          ...card,
          z: newZ,
        };
      })
    );
  };

  return (
    <>
      {cards.map((dt, index) => {
        console.log(index);
        return (
          <Draggable key={index} axis="x" handle=".handle" position={dt.defaultPosition} grid={[25, 25]} onStop={(e, data) => eventLogger(e, data, index)} scale={1} ref={dt.ref}>
            <div className="relative tes" style={{ transition: "all 0.3s", zIndex: `${dt.z}` }} ref={dt.ref}>
              <div className={`project-cards`} style={{ transform: `translate(-50%, -57%) rotate(${dt.z == cards.length ? 0 : dt.z + dt.z * 1}deg)` }}>
                <div className="main-project-cards handle">
                  <Image src={dt.image} fill alt="projects-card-image" draggable="false" />
                </div>
                <div className="footer-project-cards">
                  <div className="footer-container">
                    <div className="project-desc">
                      <h5>{dt.title}</h5>
                      <p>{dt.desc}</p>
                    </div>
                    <div className="footer-img-container">
                      <Image src={dt.barcode} fill alt="barcode" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        );
      })}
    </>
  );
};

export default ProjectsCard;
