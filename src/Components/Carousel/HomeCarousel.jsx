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
    <div id="ejemplo" className="container  h-[80vh] mx-auto w-full max-w-7xl  flex flex-col  overflow-hidden px-5 gap-6">
      <motion.div
      initial={{x:300}}
      whileInView={{x:0}}
      transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      className="flex w-full gap-10 items-end ">
        <div className="h-24 w-1 bg-primary"></div>
        <h1 className="text-2xl font-bold">Expert Dietitians</h1>
      </motion.div>
      <div
        className="flex w-full items-center justify-center"
      >
        <SimpleImageSlider
          width={"100%"}
          height={450}
          autoPlay={true}
          autoPlayDelay={5.0}
          slideDuration={1.5}
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
