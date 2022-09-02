import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import { Context } from '../Context/ContextProvider';

const ModalSesionRegister = () => {

    const {showModal, handleModal, showModal2,handleModal2} = useContext(Context)

    const handlemodals = () =>{
        handleModal()
        handleModal2()
    }

  return (
    <motion.div className='absolute -top-36 max-h-max max-w-max shadow-[0px_0px_27px_-4px_rgba(0,0,0,0.75)] right-0 left-0 bottom-0 m-auto'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: [0, 0.71, 0.2, 1.01]}}
        >
            <Card className="md:w-96 w-72">
                <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-28 place-items-center bg-primary hover:shadow-md hover:shadow-[#8fe0c5]"
                >
                    <Typography variant="h3" color="white">
                        Register
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Name" size="lg" color='teal' className='focus:border-primary '/>
                    <Input label="Email" size="lg" color='teal' className='focus:border-primary '/>
                    <Input label="Password" size="lg" color='teal' className='focus:border-primary' type='password'/>
                </CardBody>
                <CardFooter className="pt-0 text-center flex flex-col gap-4">
                    <Button variant="filled" className='bg-primary hover:shadow-md hover:shadow-[#8fe0c5]' fullWidth>
                        Save Account
                    </Button>
                    <Button variant="filled" color='red' className='bg-red-400' fullWidth onClick={handlemodals}>
                        Cancelar
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
  )
}

export default ModalSesionRegister