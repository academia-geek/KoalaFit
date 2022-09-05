
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import {
  Button,
} from "@material-tailwind/react";
import { Context } from "../Context/ContextProvider";
import Logo from '../assets/img/Logo.png'

const HomeHeader = () => {

  const [show, setShow] = useState('false')
  const { handleModal, showModal2} = useContext(Context)

  const handleMenu = () =>{
    setShow(!show)
  }

  useEffect(() =>{
    let variante = document.querySelector('.login')
    showModal2 ?  variante.disabled=true : variante.disabled=false
  },[showModal2])


  return (
    <header  className=" lg:flex  2xl:px-20 mx-auto  justify-between sticky top-0 bg-white z-10 shadow-sm ">
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="h-24 flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="h-full rounded-full"
          />
          <p className="font-bold text-2xl text-primary">KoalaFit</p>
        </div>
        <div className="h-8 lg:hidden flex items-center" onClick={handleMenu}>
          <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661971544/Demdoay/icons8-men%C3%BA-128_dswtpr.png" alt=""
            className="h-full cursor-pointer"
          />
        </div>
      </div>
      <div className={`lg:flex lg:items-center lg:static rounded-br-2xl px-6 absolute bg-white transition-all  duration-500 ${show ? 'left-[-1000px]': 'left-0'} `}>
        <ul className={"lg:flex gap-5 shadow-md rounded-md font-bold items-start py-4 px-6 float-right  flex flex-col lg:flex-row w-full pr-4 lg:items-center lg:gap-8 xl:gap-16 lg:justify-end "} >
          <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><a href="#home" >Home</a></li>
          <li className="cursor-pointer  hover:text-primary hover:scale-110 transition-all duration-300"><a href="#who" >Who We Are</a></li>
          <li className="cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300"><a href="#team" >Team</a></li>
          <li className="lg:border-r-2 lg:pr-10 lg:py-3 cursor-pointer  hover:text-primary hover:scale-110 transition-transform duration-300"><a href="#contact" >Contact Us</a></li>
          <Button className="bg-[#0FC185] hover:scale-110 transition-all duration-300 login" onClick={() => {handleModal(); handleMenu();}}>Login / Register</Button>
        </ul>
      </div>
    </header>
  );
};

export default HomeHeader;
