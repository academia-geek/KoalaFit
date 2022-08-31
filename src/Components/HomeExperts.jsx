import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion"


const HomeExperts = () => {
  return (
    <div className="grid overflow-hidden mx-auto container gap-5 justify-center items-center h-screen">
      <motion.div
      initial={{x:-300}}
      whileInView={{x:0}}
      transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      className="flex w-full gap-10 items-end">
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-xl font-bold">Expert Dietitians</h1>
      </motion.div>
      <motion.div 
      initial={{  scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
       className="mx-auto grid w-full xl:grid-cols-3 mb-36">
        <div 
        
        className="max-w-md flex gap-3 px-5 md:place-self-end items-center">
          <img
            className="w-56 h-56 rounded-full"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122349/Workshop-2/kirby_nalgon_romykx.png"
            alt="foto 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-lg font-semibold">Sr Pato</h1>
            <p>no hace nada, solo jode la vida</p>
            <Button color="green">View Details</Button>
          </div>
        </div>

        <div 
        className="max-w-md flex flex-row-reverse gap-3 px-5  items-center xl:flex-row">
          <img
            className="w-56 h-56 rounded-full"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122348/Workshop-2/Calamardo-g_rgqxhg.jpg"
            alt="foto 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-lg font-semibold">Sr Camello</h1>
            <p>Se pasa los dias comiendo ceviche de mitula</p>
            <Button color="green">View Details</Button>
          </div>
        </div>

        <div className="max-w-md flex gap-3 px-5  md:place-self-end items-center">
          <img
            className="w-56 h-56 rounded-full"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122350/Workshop-2/monal_bnyjjg.jpg"
            alt="foto 1"
          />
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-lg font-semibold">Sra Anaconda</h1>
            <p>Sin comentarios...</p>
            <Button color="green">View Details</Button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default HomeExperts;
