import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion"
import imgKevin from '../assets/img/imgKevin.png'
import imgNuthelk from '../assets/img/imgNuthelk.png'
import imgFelipe from '../assets/img/imgFelipe.png'


const HomeExperts = () => {
  return (
    <div id='team' className="flex flex-col w-full max-w-7xl px-5 justify-start items-center overflow-hidden mx-auto gap-6">
      <motion.div
      initial={{x:-300}}
      whileInView={{x:0}}
      transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      className="flex w-full gap-10 items-end">
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-2xl font-bold">Expert Dietitians</h1>
      </motion.div>
      <motion.div
      initial={{  scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
       className=" w-11/12 flex flex-col">
        <div className="w-full flex gap-3 md:gap-0 items-center justify-around ">
          <figure className="w-36 h-full md:w-48">

          <img
            className="w-full h-full object-cover "
            src={imgKevin}
            title={'@ikevinmejia in GitHub'}
            alt="@ikevinmejia"
          />
          </figure>
          <div className="flex h-full items-center md:items-start justify-evenly w-3/5 flex-col gap-2 text-center">
            <div>
            <h1 className="text-lg font-semibold">Kevin  Mejia</h1>
            <p>React Developer</p>
            </div>
            <div>
              <a href="https://linktr.ee/ikevinmejia" target={'_blank'}>
            <Button variant="filled" size="sm" className=" bg-gradient-to-r from-sixty to-secondary">View Details</Button>

              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex-row-reverse flex gap-3 md:gap-0 items-center justify-around">
          <figure className="w-36 md:w-48">

          <img
            className="w-full h-full object-cover"
            src={imgFelipe}
            alt="@Felipe852"
            title={'@Felipe852 in GitHub'}
          />
          </figure>
          <div className="flex h-full items-center md:items-end justify-evenly w-3/5 flex-col gap-2 text-center">
            <div>
            <h1 className="text-lg font-semibold">Felipe Jaramillo</h1>
            <p>React Developer</p>
            </div>
            <div>
              <a href="https://linktr.ee/felipe852" target={'_blank'}>
            <Button variant="filled" size="sm" className=" bg-gradient-to-r from-sixty to-secondary">View Details</Button>

              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3 md:gap-0 items-center justify-around ">
          <figure className="w-36 md:w-48">

          <img
            className="w-full h-full object-cover"
            src={imgNuthelk}
            alt="@nuthelk"
            title={'@nuthelk in GitHub'}
          />
          </figure>
          <div className="flex h-full items-center md:items-start justify-evenly w-3/5 flex-col gap-2 text-center">
            <div>
            <h1 className="text-lg font-semibold">Nuthelk Molina</h1>
            <p>React Developer</p>
            </div>
            <div>
              <a href="https://linktr.ee/nuthelk" target={'_blank'}>

            <Button variant="filled" size="sm" className="bg-gradient-to-r from-sixty to-secondary">View Details</Button>
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default HomeExperts;
