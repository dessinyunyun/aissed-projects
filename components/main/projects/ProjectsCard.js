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
    },
    {
      image: "/projects/lentera-inovasi.jpg",
      title: "IT SOLUTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 2,
      defaultPosition: { x: 50, y: 0 },
    },
    {
      image: "/projects/SMS.jpg",
      title: "CONSTRUCTION",
      defaultPosition: { x: 0, y: 0 },
      ref: useRef(null),
      desc: "provides information products and services",
      z: 3,
    },
  ]);

  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });
  const [disabledCondition, setDisabledCondition] = useState(false);

  // const eventLogger = (e, data, index) => {
  //   // console.log("Event: ", e);
  //   // console.log("Data: ", data);
  //   // console.log("Index: ", index);
  //   // setDefaultPosition({ x: 0, y: 0 });

  //   if (data.lastX > 100 || data.lastX < -100) {
  //     setDisabledCondition(true);
  //     setTimeout(() => {
  //       setDisabledCondition(false);
  //     }, 1000);
  //     cards.map((crd, idx) => {
  //       if (index == idx) {
  //         console.log(crd.ref.current);
  //         crd.ref.current.style.transform = `translate(400px,0px)`;
  //       }
  //     });
  //     console.log("doneeeeeeeeeeeeeee");
  //     // Kembali ke posisi semula dengan setPosition
  //     // data.node.lastX = 350;
  //     // setDefaultPosition({ x: 0, y: 0 });
  //     // handleCardClick();
  //   }
  // };

  const handleDrag = (e) => {
    // Update defaultPosition saat drag berlangsung
    setDefaultPosition({ x: 400, y: 0 });
  };

  const eventLogger = (e, data, index) => {
    if (data.lastX > 100 || data.lastX < -100) {
      // setDisabledCondition(true);

      // Mengubah posisi kartu yang terkena kondisi if menggunakan setCards
      setCards((prevCards) =>
        prevCards.map((card, idx) => {
          if (idx === index) {
            return {
              ...card,
              defaultPosition: { x: data.lastX > 100 ? 300 : -300, y: 0 }, // Ubah posisi kartu yang terkena kondisi if
            };
          }
          return card;
        })
      );

      setTimeout(() => {
        // Mengatur ulang posisi kartu setelah 1 detik
        setCards((prevCards) =>
          prevCards.map((card, idx) => {
            if (idx === index) {
              return {
                ...card,
                defaultPosition: { x: 0, y: 0 }, // Kembalikan posisi kartu ke (0, 0)
              };
            }
            return card;
          })
        );
        setDisabledCondition(false);
        handleCardClick();
      }, 250);
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
        console.log(index);
        return (
          <Draggable disabled={disabledCondition} key={index} axis="x" handle=".handle" position={dt.defaultPosition} grid={[25, 25]} onStop={(e, data) => eventLogger(e, data, index)} scale={1}>
            <div className="relative tes" style={{ transition: "all 0.3s", zIndex: `${dt.z}` }} ref={dt.ref}>
              <div className={`project-cards `} style={{ transform: `translate(-50%, -50%) rotate(${dt.z == 3 ? 0 : dt.z + dt.z * 1.5}deg)` }}>
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
