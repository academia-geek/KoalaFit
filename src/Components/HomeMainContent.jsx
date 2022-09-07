import React, { useContext } from "react";
import { Button } from "@material-tailwind/react";
import HomeMain from '../assets/svg/HomeMain.svg'
import { Context } from "../Context/ContextProvider";
import ModalSesion from "./ModalSesion";
import ModalSesionRegister from "./ModalSesionRegister";

const HomeMainContent = () => {

  const {showModal, handleModal, showModal2,handleModal2} = useContext(Context)

  const handleModals = () =>{
    if(showModal){
      handleModal()
    }
    if(showModal2){
      handleModal2()
    }
  }

  return (
    <div id="home">
      <div className={`w-full bg-WaveHome bg-bottom bg-no-repeat bg-cover mt-4 transition-opacity duration-300 h-[90vh] relative
        ${(showModal || showModal2) ? 'opacity-30 ' : 'opacity-100'}`}
        onClick={handleModals}
        >
        <div className="flex w-11/12 flex-col h-full  items-center justify-start gap-8 md:flex-row max-w-7xl mx-auto ">

          <section className=" flex flex-col items-start md:justify-start  h-1/2 w-11/12 gap-5  justify-center " >
            <h1 className=" md:text-5xl text-2xl font-bold text-primary">Strong like a koala, competitive like a gamer</h1>
            <h2 className="text-greyColor w-full text-lg md:text-xl  ">Do It Smart</h2>
            <Button variant="filled" size="md" className=" bg-gradient-to-r from-primary to-terciary">
              <a href="#carousel">View more</a>
            </Button>
          </section>
          <figure className="md:h-5/6 h-1/2 w-11/12 " >
            <img src={HomeMain} alt="Welcome image at home" className="w-full h-full object-contain" />
          </figure>
        </div>
      </div>
      {showModal && <ModalSesion />}
      {showModal2 && <ModalSesionRegister/>}
    </div>
  );
};

export default HomeMainContent;
