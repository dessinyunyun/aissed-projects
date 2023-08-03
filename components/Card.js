import Draggable from "react-draggable";
import React, { useRef, useState } from "react";

export default function DraggableComponents() {
  const [cards, setCards] = useState([
    {
      content: "card 1",
      z: 1,
      ref: useRef(null),
      color: "red",
    },
    {
      content: "card 2",
      z: 2,
      ref: useRef(null),
      color: "blue",
    },
    {
      content: "card 3",
      z: 3,
      ref: useRef(null),
      color: "green",
    },
  ]);

  const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });

  const eventLogger = (e, data, index) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
    setDefaultPosition({ x: 0, y: 0 });
    if (data.lastX > 200 || data.lastX < -200) {
      console.log("doneeeeeeeeeeeeeee");
      // Kembali ke posisi semula dengan setPosition
      // data.node.setPosition({ x: 0, y: 0 });
      setDefaultPosition({ x: 0, y: 0 });
      handleCardClick();
    }
  };

  const handleCardClick = () => {
    // const nameValue = divRef.current.getAttribute("zindex");
    // console.log(typeof nameValue);
    const updatedCards = cards.map((card) => {
      if (card.z === 3) {
        return {
          ...card,
          z: 1,
        };
      } else {
        return {
          ...card,
          z: card.z + 1,
        };
      }
    });

    setCards(updatedCards);
  };

  console.log(cards);
  console.log(defaultPosition);
  return (
    <div className="relative">
      {cards.map((dt, index) => {
        return (
          <Draggable key={index} axis="x" handle=".handle" defaultPosition={{ x: 0, y: 0 }} position={defaultPosition} grid={[25, 25]} onStop={eventLogger} scale={1}>
            <div className={`absolute draggable-element top-10 w-28 z-${dt.z}0`} style={{ transition: "all 0.5s" }} ref={dt.ref} zindex={dt.z}>
              {/* <div className="handle bg-grey cursor-pointer h-96 text-xl" onClick={(e) => handleCardClick(e, index)}> */}
              <div className="handle h-96 text-xl" style={{ backgroundColor: dt.color }}>
                {dt.content}
              </div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}
