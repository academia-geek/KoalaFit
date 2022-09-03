import React from 'react'
import { motion } from "framer-motion"

const HomeTestimonialsCards = ({img, name, descrip}) => {
  return (
    <>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="border rounded-lg shadow-md  max-w-xs h-44 flex flex-col gap-5 justify-center px-2 mx-auto hover:shadow-sixty transition-shadow duration-300">
            <p className="text-base font-medium">{descrip}</p>
            <div className="flex items-center gap-8 justify-center">
                <img className="w-10 h-10 rounded-full object-cover " src={img} alt="photo" />
                <h2 className="font-bold">{name}</h2>
            </div>
        </motion.div>
    </>
  )
}

export default HomeTestimonialsCards