import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion"

const HomeWWA = () => {
  return (
    <div className="grid mx-auto container gap-5 lg:grid-cols-2 lg:items-center h-screen overflow-hidden">
      <img
        className="rounded-full max-h-md max-w-md w-1/2 h-1/2 mx-auto mt-10"
        src="https://res.cloudinary.com/dnont3pur/image/upload/v1661911272/DemoDay%20Temporaly%20Imgs/Koala_drwpvz.jpg"
        alt="Algo"
      />
      <motion.div 
      initial={{x:300}}
      whileInView={{x:0}}
      transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      className="h-3/4 gap-10 flex flex-col px-5">
        <div className="flex w-full gap-10 items-end">
          <div className="h-24 w-1 bg-primary"></div>
          <h1 className="text-xl font-bold">Who We Are</h1>
        </div>
        <div className="w-full flex">
          <Button color="green" size="lg">
            Visit Our Profile
          </Button>
        </div>
        <div className="flex justify-center pr-10 mt-10">
          <p className="max-w-xs md:max-w-lg">
            Aqui va un texto muy largo... nuthelk es un lame escrotos... cuando
            sea grande quiere ser grande, no se que mas poner pero bueno... la
            vaca lola, la vaca lola tiene cabeza y tiene cola y hace muuuuuu y
            hace muuuuuu.
            <br /> <br /> Puto el que lo lea completo, asi como el que te
            enterraron anoche....
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWWA;
