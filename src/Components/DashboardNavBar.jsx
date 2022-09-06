import { FaHistory } from 'react-icons/fa';
import { AiOutlineTrophy,AiOutlineFire } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import React, { useContext } from "react";
import { RiDashboardLine } from 'react-icons/ri'
import { IconButton } from "@material-tailwind/react";
import { Context } from "../Context/ContextProvider";
import Logo from '../assets/img/Logo.png'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { getAuth } from 'firebase/auth';

const DashboardNavBar = () => {

  const { setId } = useContext(Context)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const auth = getAuth()

  const handleCLick = ({target}) =>{
    setId(target.id)
    onClose()
  }


  return (
    <header className="  2xl:px-20 mx-auto  justify-between z-10 top-0 bg-white shadow-sm  sticky">
      <div className="flex justify-between items-center px-6 py-2 ">
        <div className="h-20 flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo KoalaFit"
            className="h-full rounded-full"
          />
          <p className="font-bold text-2xl text-primary">KoalaFit</p>
        </div>
        <div className="flex">

          <IconButton variant="text" size="lg" className="h-8 lg: flex items-center shadow-none" onClick={onOpen} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
            <RiDashboardLine color="#0FC185" size={32} />
          </IconButton>
        </div>
      </div>
      <div>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'xs'}

        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader className='bg-primary'>
              <div className=' text-white text-center text-3xl font-bold'>
                Menu
              </div>
            </DrawerHeader>

            <DrawerBody className='bg-primary flex flex-col gap-28 justify-center items-center'>
              <div className='flex items-center text-white font-semibold text-lg  cursor-pointer' id={1} onClick={(e)=>handleCLick(e)}>
                <IconButton variant="text" size="lg" className="h-8 lg: flex items-center shadow-none" onClick={onOpen} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                  <MdOutlineDashboard size={30} color='white' id={1}/>
                </IconButton>
                Dashboard
              </div>

              <div className='flex items-center text-white font-semibold text-lg cursor-pointer' id={2} onClick={(e)=>handleCLick(e)}>
                <IconButton  variant="text" size="lg" className="h-8 lg: flex items-center shadow-none" onClick={onOpen} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                  <AiOutlineFire size={30} color='white' id={2}/>
                </IconButton>
                Challenges
              </div>
              <div className='flex items-center text-white font-semibold text-lg cursor-pointer' id={3} onClick={(e)=>handleCLick(e)}>
                <IconButton  variant="text" size="lg" className="h-8 lg: flex items-center shadow-none" onClick={onOpen} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                  <AiOutlineTrophy size={30} color='white' id={3}/>
                </IconButton>
                Ranking
              </div>
              <div className='flex items-center text-white font-semibold text-lg cursor-pointer' id={4} onClick={(e)=>handleCLick(e)}>
                <IconButton  variant="text" size="lg" className="h-8 lg: flex items-center shadow-none" onClick={onOpen} data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                  <FaHistory size={30} color='white' id={4}/>
                </IconButton>
                History
              </div>
            </DrawerBody>

            <DrawerFooter className='bg-primary'>

              <Button colorScheme='teal' onClick={() => {auth.signOut(), localStorage.clear(),setId(0) }} >Logout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>



    </header>
  );
};

export default DashboardNavBar;
