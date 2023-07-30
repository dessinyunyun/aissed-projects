import React from "react";
import Plx from "react-plx";

const ChangeColor = () => {
  const text = "Setiap huruf akan berubah warna saat di-scroll.";
  const letters = text.split(" "); // Memisahkan teks menjadi array huruf
  console.log(letters);

  const lettersResult = [];

  for (let i = 0; i < letters.length; i++) {
    lettersResult.push([]);

    lettersResult[i].push({
      data: [
        {
          start: ".aboutmetrigger",
          startOffset: "250vh",
          duration: "50vh",
          name: "first",
          properties: [
            {
              startValue: 0.3,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
      ],
    });
  }

  const renderBoxes = (props) => {
    const boxes = [];

    lettersResult.forEach((row, index) => {
      row.forEach((box, boxIndex) => {
        return boxes.push(
          <Plx key={index} parallaxData={box.data} style={{ opacity: 0.3 }}>
            {letters[index]}{" "}
          </Plx>
        );
      });
    });

    return boxes;
  };

  return (
    // <div className="fixed text-aboutme flex justify-center items-center w-full top-0 bg-dark">
    //   <div className="p-6 mt-5 w-full rounded-3xl font-medium tracking-[0.1em]">
    <>{renderBoxes()}</>
    //   </div>
    // </div>
  );
};

export default ChangeColor;
