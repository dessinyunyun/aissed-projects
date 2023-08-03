import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Plx from "react-plx";
import "./hero.css";
import { textData } from "./parallaxConfig";

const Hero = () => {
  return (
    <Plx className="hero-parallax" parallaxData={textData}>
      <div className="hero-container">
        <div className="hero-container-inside">
          <div className="title">
            <h1 className="name-title font-regular">Hello. I am Dessi Anwar</h1>
            <h2 className="web-title">WEB DEVELOPER</h2>
          </div>

          <div className="main-div">
            <div className="grey-box">
              <div className="grey-hero ">
                <Typewriter
                  options={{
                    strings: [`<   html />`, `<   style />`, `<   script />`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="orange-box">
              <h3 className="javascript-hero-title">FULLSTACK . JAVASCRIPT</h3>
              <p className="javascript-hero-desc font-regular">
                Web Knowledge Seeker: <br />
                Embracing Endless Learning Opportunities
              </p>
            </div>
          </div>
          <div className="barcode-container">
            <Image src={"/hero-barcode.png"} width={150} height={0} alt="barcode" />
            <p className="-mt-3">@2023</p>
          </div>
        </div>
      </div>
    </Plx>
  );
};

export default Hero;
