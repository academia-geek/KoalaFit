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

const ModalSesion = () => {

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
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input label="Email" size="lg" color='teal' className='focus:border-primary '/>
                    <Input label="Password" size="lg" color='teal' className='focus:border-primary '/>

                </CardBody>
                <CardFooter className="pt-0 text-center">
                    <Button variant="filled" className='bg-primary hover:shadow-md hover:shadow-[#8fe0c5]' fullWidth>
                        Sign In
                    </Button>
                    <Typography variant="small" className='mt-4'>Or Login with</Typography>
                    <div className='flex items-centers justify-center mt-4 gap-4'>
                        <div className='cursor-pointer h-10 w-10 bg-primary rounded-full flex items-center justify-center mt-1 hover:scale-105 transition-transform duration-300'>
                            <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1662000388/Demdoay/icons8-logo-de-google-50_1_hu8d6j.png" alt="" 
                                className=' object-center w-[60%] h-[60%]'
                            />
                        </div>
                        <div className='cursor-pointer'>
                            <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661995133/Demdoay/icons8-facebook-nuevo-48_swtggm.png" alt="" 
                                className='hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                    </div>

                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            className="ml-1 font-bold text-primary"
                            onClick={handlemodals}
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default ModalSesion