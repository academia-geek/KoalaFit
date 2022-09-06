import React from "react";
import { motion } from "framer-motion"
import HomeTestimonialsCards from "./HomeTestimonialsCards";

const HomeTestimonials = () => {
  return (
    <div className=" h-full mx-auto container overflow-hidden ">
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex h-36 w-full gap-10 items-end pl-5 "
      >
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-2xl font-bold">Client Testimonials</h1>
      </motion.div>

      <div className="grid h-full gap-5 lg:grid-cols-3  mt-10">

        <HomeTestimonialsCards
          img={'https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          descrip={'Does what it is supposed to do. Highly recommend.'}
          name={'Jun Ji-hyun'}
          />
        <HomeTestimonialsCards
          img={'https://images.pexels.com/photos/1085517/pexels-photo-1085517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          descrip={'I always recommend Koala Fit to my family to achieve the goal of having a better weight.'}
          name={'Christina McDonald'}
          />
        <HomeTestimonialsCards
          img={'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          descrip={'I am really surprised at how much my self-esteem increases. I can exercise at work!'}
          name={'Luca Patrelli'}
          />

      </div>
    </div>
  );
};

export default HomeTestimonials;
