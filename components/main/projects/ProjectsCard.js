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
    },
    {
      image: "/projects/lentera-inovasi.jpg",
      title: "IT SOLUTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 2,
    },
    {
      image: "/projects/SMS.jpg",
      title: "CONSTRUCTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 3,
    },
  ]);

  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });

  const eventLogger = (e, data, index) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
    setDefaultPosition({ x: 0, y: 0 });
    if (data.lastX > 450 || data.lastX < -450) {
      console.log("doneeeeeeeeeeeeeee");
      // Kembali ke posisi semula dengan setPosition
      // data.node.setPosition({ x: 0, y: 0 });
      setDefaultPosition({ x: 0, y: 0 });
      handleCardClick();
    }
  };

  const handleCardClick = () => {
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

  console.log(cards);

  return (
    <>
      {cards.map((dt, index) => {
        return (
          <Draggable key={index} axis="x" handle=".handle" position={defaultPosition} grid={[25, 25]} onStop={eventLogger} scale={1}>
            <div className="relative" style={{ transition: "all 0.3s", zIndex: `${dt.z}` }} ref={dt.ref}>
              <div className={`project-cards `} style={{ transform: `translate(-50%, -50%) rotate(${dt.z == 3 ? 0 : dt.z + 5}deg)` }}>
                <div className="main-project-cards text-main handle">
                  <Image
                    src={dt.image}
                    fill
                    style={{
                      objectFit: "cover", // cover, contain, none
                    }}
                    className="h-3/4 "
                    alt="projects-card-image"
                    draggable="false"
                  />
                  {/* <div className="absolute h-full w-full bg-red-500"></div> */}
                </div>
                <div className="footer-project-cards p-2.5">
                  <div className="footer-container flex border-dark rounded-lg h-full">
                    <div className="project-desc w-3/5 p-1.5">
                      <h5 className="text-center font-bold">{dt.title}</h5>
                      <p>{dt.desc}</p>
                    </div>
                    <div className="w-2/5 relative p-2">
                      <Image
                        src={"/projects/mitsubishi-barcode.png"}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
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
