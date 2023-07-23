import Image from "next/image";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container absolute z-10 gap-5 py-5 flex justify-between items-center w-10/12 font-regular">
      <div class="logo">
        <Image src={"/sun-logo.png"} width={50} height={50} />
      </div>
      <div class="nav-menu">
        <ul className="flex gap-5 items-center">
          <li>
            Contact me: <br /> <u>dessinyunyun@gmail.com</u>
          </li>
          <li>
            <u>BLOG</u>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
