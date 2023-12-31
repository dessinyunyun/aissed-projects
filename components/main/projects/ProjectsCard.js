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
      url: "https://sales-mitsubishi-kendari.com/",
    },
    {
      image: "/projects/lentera-inovasi.jpg",
      title: "IT SOLUTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 2,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/lenterainovasi-barcode.png",
      url: "https://lenterainovasi.co.id/",
    },
    {
      image: "/projects/SMS.jpg",
      title: "CONSTRUCTION",
      ref: useRef(null),
      desc: "provides information products and services",
      z: 3,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/SMS-barcode.png",
      url: "https://saranamitrasulawesi.com/",
    },
    {
      image: "/projects/hnsi.jpg",
      title: "FISHERS' ORGANIZATION",
      ref: useRef(null),
      desc: "HNSI Identity Website.",
      z: 4,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/hnsi-barcode.png",
      url: "https://hnsisultra.com/",
    },

    {
      image: "/projects/admin-dashboard.jpg",
      title: "Admin Dashboard",
      ref: useRef(null),
      desc: "Authentication, Item & Supplier Management.",
      z: 5,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/admindashboard-barcode.png",
      url: "https://github.com/dessinyunyun/market-place-mini",
    },
    {
      image: "/projects/hotel.jpg",
      title: "Booking Hotel",
      ref: useRef(null),
      desc: "Hotel Reservations.",
      z: 6,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/hotel.png",
      url: "https://github.com/dessinyunyun/hotel-booking-app",
    },
    {
      image: "/projects/todolist.jpg",
      title: "TODOLIST",
      ref: useRef(null),
      desc: "Organize tasks effortlessly with ToDoList.",
      z: 7,
      defaultPosition: { x: 0, y: 0 },
      barcode: "/projects/todolist-github.png",
      url: "https://responsive-todolist.vercel.app/",
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

                      <a target="_blank" href={dt.url} className=" text-white/80 flex items-center gap-2 underline italic">
                        <p>Visit</p>
                        <div className="flex items-center">
                          <Image src={"/visit-url.png"} width={10} height={10} />
                        </div>
                      </a>
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
