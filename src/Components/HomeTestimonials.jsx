import React from "react";
import { motion } from "framer-motion"

const HomeTestimonials = () => {
  return (
    <div className=" h-full mx-auto container">
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex h-36 w-full gap-10 items-end pl-5"
      >
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-xl font-bold">Client Testimonials</h1>
      </motion.div>

      <div className="grid h-full gap-5 lg:grid-cols-3 lg:mt-44 mt-10">

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="border border-primary rounded-lg shadow-md shadow-primary max-w-xs h-44 flex flex-col gap-5 justify-center px-2 mx-auto">
            <p className="text-xs font-medium">La cabra, la cabra, la puta de la cabra, la madre que la parió. Yo tenía una cabra que se llamaba Asunción </p>
            <div className="flex items-center gap-8">
                <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122348/Workshop-2/noen_qc76za.jpg" alt="photo" />
                <h1 className="font-bold">Cancion</h1>
            </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="border border-primary rounded-lg shadow-md shadow-primary max-w-xs h-44 flex flex-col gap-5 justify-center px-2 mx-auto">
            <p className="text-xs font-medium">La cabra, la cabra, la puta de la cabra, la madre que la parió. Yo tenía una cabra que se llamaba Asunción </p>
            <div className="flex items-center gap-8">
                <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122348/Workshop-2/noen_qc76za.jpg" alt="photo" />
                <h1 className="font-bold">Cancion</h1>
            </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="border border-primary rounded-lg shadow-md shadow-primary max-w-xs h-44 flex flex-col gap-5 justify-center px-2 mx-auto">
            <p className="text-xs font-medium">La cabra, la cabra, la puta de la cabra, la madre que la parió. Yo tenía una cabra que se llamaba Asunción </p>
            <div className="flex items-center gap-8">
                <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/dnont3pur/image/upload/v1659122348/Workshop-2/noen_qc76za.jpg" alt="photo" />
                <h1 className="font-bold">Cancion</h1>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
