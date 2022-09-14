import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import imgHomeWWA_sm from "../assets/img/HomeWWA_sm.png";
import imgHomeWWA_lg from "../assets/img/HomeWWA_lg.png";

const HomeWWA = () => {
  return (
    <div id="who" className="flex flex-col w-full max-w-7xl md:flex-row justify-center items-center h-screen overflow-hidden pt-6 mx-auto max-h-[760px]">
      <figure className="h-2/5 w-full md:w-1/2 md:h-full ">
        <picture>
          <source srcSet={imgHomeWWA_lg} media="(min-width: 720px)" />
        <img
          className=" w-full h-full object-cover md:object-contain"
          src={imgHomeWWA_sm}
          alt="Who we are image"
        />
        </picture>
      </figure>
      <motion.div
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="h-full  gap-8 flex md:w-1/2 flex-col px-5 w-full justify-center items-center"
      >
        <div className="flex w-full gap-10 items-end">
          <div className="h-24 w-1 bg-primary"></div>
          <h1 className="text-2xl font-bold">Who We Are</h1>
        </div>
        <div className="w-full flex">
          <Button
            size="md"
            variant="outlined"
            className="border border-primary text-primary"
          >
            Visit Our Profile
          </Button>
        </div>
        <div className="">
          <p className="">
            We are a company that is passionate about healthy living and video games with a future vision of transforming lives through exercise, games, challenges and promoting water consumption.
            <br /> <br /> Koala Fit was created from the need to have a more active life, helping people in the office and who are fond of video games to lose weight or have a better body.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWWA;
