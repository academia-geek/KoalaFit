
import React, { useEffect, useContext, useState } from "react";
import {BiUser} from 'react-icons/bi'
import {RiDashboardLine} from 'react-icons/ri'
import { IconButton} from "@material-tailwind/react";
import { Context } from "../Context/ContextProvider";

const DashboardNavBar = () => {

  const { showDrawer } = useContext(Context)


  return (
    <header  className=" lg:flex  2xl:px-20 mx-auto  justify-between sticky top-0 bg-white z-10 shadow-sm ">
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="h-24 flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661911176/Demdoay/WhatsApp_Image_2022-08-30_at_8.34.27_PM_bhvenw.jpg"
            alt="Logo KoalaFit"
            className="h-full rounded-full"
          />
          <p className="font-bold text-2xl text-primary">KoalaFit</p>
        </div>
        <div className="flex">

        <IconButton variant="text" size="lg" className="h-8 lg:hidden flex items-center shadow-none" onClick={showDrawer} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
          <RiDashboardLine color="#0FC185" size={32}/>
        </IconButton>
        <IconButton variant="text" size="lg" className="h-8 lg:hidden flex items-center shadow-none" onClick={showDrawer}>
          <BiUser color="#0FC185" size={32}/>
        </IconButton>
        </div>
      </div>

    </header>
  );
};

export default DashboardNavBar;
