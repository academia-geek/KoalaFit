
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-scroll'
import {
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Context } from "../Context/ContextProvider";

const HomeHeader = () => {

  const [show, setShow] = useState('false')
  const {showModal, handleModal, showModal2,handleModal2} = useContext(Context)

  const handleMenu = () =>{
    setShow(!show)
  }
  
  useEffect(() =>{
    let variante = document.querySelector('.login')
    showModal2 ?  variante.disabled=true : variante.disabled=false
  },[showModal2])
 

  return (
    <header className=" lg:flex  2xl:px-20 lg:px-4  justify-between relative">
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="h-24 flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661911176/Demdoay/WhatsApp_Image_2022-08-30_at_8.34.27_PM_bhvenw.jpg"
            alt=""
            className="h-full rounded-full"
          />
          <p className="font-bold text-2xl text-primary">KoalaFit</p>
        </div>
        <div className="h-14 lg:hidden flex items-center" onClick={handleMenu}>
          <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661971544/Demdoay/icons8-men%C3%BA-128_dswtpr.png" alt=""
            className="h-full cursor-pointer"
          />
        </div>
      </div>
      <div className={`lg:flex lg:items-center lg:static rounded-br-2xl px-6 absolute bg-white transition-all  duration-500 ${show ? 'left-[-1000px]': 'left-0'} `}>
        <ul className={"lg:flex gap-5 font-bold items-start py-4 px-6 float-right  flex flex-col lg:flex-row w-full pr-4 lg:items-center lg:gap-8 xl:gap-16 lg:justify-end "} >
          <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#home" >Home</Link></li>
          <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#who" >Who We Are</Link></li>
          <li className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300"><Link to="#team" >Team</Link></li>
          <li className="lg:border-r-2 lg:pr-10 lg:py-3 cursor-pointer  hover:text-primary hover:scale-110 transition-transform duration-300"><Link to="#contact" >Contact Us</Link></li>
          <Button className="bg-[#0FC185] hover:scale-110 transition-all duration-300 login" onClick={handleModal}>Login / Register</Button>
        </ul>
      </div>
    </header>
  );
};

export default HomeHeader;
