import React, { useState } from "react";
import Card from "./Card";
import "./SwipeCardContainer.css";

const SwipeCardContainer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setOffset(deltaX);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setOffset(0);

    if (Math.abs(offset) > 100) {
      // Threshold to consider it a swipe
      if (offset > 0) {
        // Swipe right
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else {
        // Swipe left
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2));
      }
    }
  };

  return (
    <div className="card-container" onMouseDown={handleDragStart} onMouseMove={handleDrag} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd}>
      <Card
        title="Card 1"
        backgroundColor="#FF4C29"
        style={{
          transform: `translateX(${offset}px)`,
          zIndex: currentIndex === 0 ? 1 : 0,
        }}
      />
      <Card
        title="Card 2"
        backgroundColor="#FFAF29"
        style={{
          transform: `translateX(${offset}px)`,
          zIndex: currentIndex === 1 ? 1 : 0,
        }}
      />
      <Card
        title="Card 3"
        backgroundColor="#00C781"
        style={{
          transform: `translateX(${offset}px)`,
          zIndex: currentIndex === 2 ? 1 : 0,
        }}
      />
    </div>
  );
};

export default SwipeCardContainer;
