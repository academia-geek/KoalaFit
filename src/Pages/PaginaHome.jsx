import React, { useContext } from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeExperts from "../Components/HomeExperts";
import HomeWWA from "../Components/HomeWWA";
import HomeMainContent from "../Components/HomeMainContent";
import { Context } from "../Context/ContextProvider";
import HomeTestimonials from '../Components/HomeTestimonials'
import Footer from "../Components/Footer";

const PaginaHome = () => {
  const { showModal, showModal2 } =
    useContext(Context);

  return (
    <div>
      <HomeHeader />
      <HomeMainContent />
      {(showModal || showModal2) === true ? null : (
        <>
          <div className="bg-gradient-to-t from-mainBgColor via-white to-[#CDF9E8]">
            <HomeWWA />
            <HomeExperts />
            <HomeTestimonials />
            <Footer/>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginaHome;
