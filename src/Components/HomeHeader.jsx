import { Avatar } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'

const HomeHeader = () => {

  return (
    <header className=" h-32 flex items-center px-56 justify-between">
      <div className="h-24 flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661911176/Demdoay/WhatsApp_Image_2022-08-30_at_8.34.27_PM_bhvenw.jpg"
          alt=""
          className="h-full"
        />
        <p className="font-bold text-xl">Perritas Locas</p>
      </div>
      <ul className={"flex gap-10 font-bold items-center"} >
        <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#home" >Home</Link></li>
        <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#who" >Who We Are</Link></li>
        <li className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#team" >Team</Link></li>
        <li className="border-r-2 pr-8 py-3 cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"> <Link to="#contact" >Contact Us</Link></li>
        <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"> <Link to="#register" >Register/Login</Link></li>
      </ul>
    </header>
  );
};

export default HomeHeader;
