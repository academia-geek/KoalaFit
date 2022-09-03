import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { motion } from "framer-motion"
import { useContext } from "react";
import { Context } from "../../Context/ContextProvider";

const HomeCarousel = () => {
  const { handleModal} = useContext(Context)

  const images = [
    {
      url: "https://res.cloudinary.com/dnont3pur/image/upload/v1662159935/DemoDay%20Temporaly%20Imgs/img1_1_mwolk5.png",
    },
    {
      url: "https://res.cloudinary.com/dnont3pur/image/upload/v1662159937/DemoDay%20Temporaly%20Imgs/img4_pdyor8.png",
    },
    {
      url: "https://res.cloudinary.com/dnont3pur/image/upload/v1662159937/DemoDay%20Temporaly%20Imgs/img2_ictgxf.png",
    },
  ];

  const handleOnClick = () => {
    handleModal();
  };

  return (
    <div id="ejemplo" className="container h-screen flex flex-col justify-start overflow-hidden px-5 gap-6">
      <motion.div
      initial={{x:300}}
      whileInView={{x:0}}
      transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      className="flex w-full gap-10 items-end">
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-xl font-bold">Expert Dietitians</h1>
      </motion.div>
      <div
        className="flex justify-center items-center"
      >
        <SimpleImageSlider
          width={"60%"}
          height={450}
          autoPlay={true}
          autoPlayDelay={2.0}
          slideDuration={0.5}
          bgColor={"#A5C9BB"}
          navStyle={2}
          onClick={handleOnClick}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
