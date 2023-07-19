import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="contain absolute gap-5 p-5 flex justify-between items-center w-10/12 font-regular">
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
