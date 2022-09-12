import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FiEdit } from "react-icons/fi";
import "react-circular-progressbar/dist/styles.css";
import {GiWeight,GiBodyHeight,GiStairsGoal} from 'react-icons/gi'
import {BsFillLightningChargeFill} from 'react-icons/bs'
import {IoIosWater} from 'react-icons/io'
import { Formik } from 'formik';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  CircularProgress,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDataInFirestore } from "../helpers/updateUserDataInFirestore";
import { addCalories, addWater, addWHG, currentUser } from "../Redux/Actions/userActions";
import { updatedAlert } from "../helpers/alerts";
import { calculateCal } from "../helpers/calculateCal";
import { calculateWater } from "../helpers/calculateWater";
import DashboardProfileMenu from "./DashboardProfileMenu";
import { Context } from "../Context/ContextProvider";
import { db } from "../Firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { caloriesBurned } from "../helpers/totalCaloriesBurned";

const color = '#0FC185'
const initialDataUser = {
  name: 'Name not found',
  photo: 'https://res.cloudinary.com/dzsd7vfjr/image/upload/v1662500603/Demdoay/depositphotos_68073147-stock-illustration-animal-koala-cartoon-theme-elements_jfwxmj.webp',
  weight: 64,
  height: '1.70',
  goal: 58,
  calorieGoal: 0,
  calorieBurned: 0,
  water: 0,
  city: 'EEUU',
  age: 20,
}

const DashboardProfile = () => {
  const login = useSelector(state => state.login)
  const dataUserLogin = JSON.parse(localStorage.getItem('dataUserLogin'))
  const modalAddCal = useDisclosure();
  const modalAddWater = useDisclosure();
  const btnAddCal = useRef(null);
  const btnAddWater = useRef(null);
  const [waterCounter, setWaterCounter] = useState(0)
  const {aux, setAux} = useContext(Context)
  const dispatch = useDispatch()
  const [userLogin, setUserLogin] = useState()
  const [dbTotalCalories,setDbTotalCalories] = useState()
  const [caloriesB, setCaloriesB] = useState()
  const idUser = localStorage.getItem("idUserLogin")
  // const [porcentaje, setPorcentaje] = useState()
  let porcentaje

  


  const funcionRara = async(state,state2) =>{
    const userRef = doc(db, "users", idUser)
    const currentUser = await getDoc(userRef)
    state(currentUser.data())
    state2(currentUser.data().totalCalories && currentUser.data().totalCalories)
    
  }
  useEffect(()=>{
    caloriesBurned(setCaloriesB, idUser)
    funcionRara(setUserLogin,setDbTotalCalories)
   
    
  },[aux])

  porcentaje = (Number(caloriesB*100)/Number(dbTotalCalories))
 
  return (
    <>
    {userLogin ?
      <div className="flex flex-col items-center pt-8 justify-around gap-8 ">
      <div className="bg-white relative shadow-md max-w-xs w-full flex flex-col items-center rounded-3xl px-8 pb-8 ">
        <div className="h-8 shadow-none right-4 top-4 absolute cursor-pointer">
          <DashboardProfileMenu/>
        </div>
        <div className="h-24 w-24 flex justify-center -mt-10">
          <img
            src={userLogin.photoURL ?  userLogin.photoURL : initialDataUser.photo }
            alt="Profile img"
            className="h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-4 text-center gap-2 border-b-2 w-[70%] pb-3">
          <p className="font-bold">{userLogin ? userLogin.displayName : initialDataUser.name }</p>
          <p className="text-textColor">{userLogin.age ? userLogin.age : initialDataUser.age} years, {userLogin.city ? userLogin.city : initialDataUser.city}</p>
        </div>

        <div className="flex justify-around items-center pt-4 w-full">
          <div className="flex flex-col">
            <p className="text-primary text-sm">Weight</p>
            <p className="text-lg font-semibold">{userLogin.weight ? userLogin.weight : initialDataUser.weight } kg</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary text-sm">Height</p>
            <p className="text-lg font-semibold">{userLogin.height ? userLogin.height : initialDataUser.height } m</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary text-sm">Goal</p>
            <p className="text-orange-400 font-semibold">{userLogin.goal ? userLogin.goal : initialDataUser.goal } kg</p>
          </div>
        </div>
      </div>

      <div className="bg-white relative shadow-md max-w-xs w-full flex flex-col rounded-3xl px-8 pb-8 pt-8 min-w-min ">
      <div
          onClick={modalAddCal.onOpen} ref={btnAddCal}
          className="h-8 shadow-none right-4 top-4 absolute cursor-pointer"
        >
          <FiEdit color="#0FC185" size={20} />
        </div>
        <p className="font-semibold">Calorie Counter</p>
        <div className="flex justify-between items-center">
          <div>
            <div className="mt-6">
              <p className="text-textColor">Goal</p>
              <p>{dbTotalCalories ? dbTotalCalories : initialDataUser.calorieGoal } kcal</p>
            </div>

            <div className="mt-6">
              <p className="text-textColor">Burned</p>
              <p>{caloriesB ?  caloriesB : initialDataUser.calorieBurned} kcal</p>
            </div>
          </div>
          <div className="h-36 w-36 text-center font-semibold text-primary mb-4">
            <CircularProgressbar
              value={caloriesB && dbTotalCalories ? caloriesB: 0}
              text={porcentaje ?`${porcentaje.toFixed(1)} %`: `0%`}
              min={0}
              maxValue={dbTotalCalories ? dbTotalCalories : 100 }
              styles={buildStyles({
                trailColor: "#d6d6d6",
                pathColor: "#0FC185",
                textColor: "#0FC185",
              })}
            />
            Kcal burned
          </div>
        </div>
        <div className="flex justify-around">
          <div></div>
        </div>
      </div>

      <div className="bg-white shadow-md relative max-w-xs w-full flex flex-col rounded-3xl px-8 pb-8 pt-8 min-w-min">
      <div
          onClick={modalAddWater.onOpen} ref={btnAddCal}
          className="h-8 shadow-none right-4 top-4 absolute cursor-pointer"
        >
          <FiEdit color="#0FC185" size={20} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Drunk</p>
            <p className="flex flex-col">
              {waterCounter * 20}{''} ml / <span className="text-textColor">2000 ml</span>
            </p>
          </div>
          <div className="h-24 w-24">
            <CircularProgressbar
              value={waterCounter}
              text={`${waterCounter} %`}
              styles={buildStyles({
                trailColor: "#d6d6d6",
                pathColor: "#0FC185",
                textColor: "#0FC185",
              })}
            />
          </div>
        </div>
      </div>


      {/* MODAL GET CALORIES */}
      <Modal
          isOpen={modalAddCal.isOpen}
          onClose={modalAddCal.onClose}
          finalFocusRef={btnAddCal}
          initialFocusRef={btnAddCal}
        >
          <ModalOverlay />
          <Formik
          initialValues={{totalCalories: ''}}
          onSubmit={(values => {
            updateUserDataInFirestore(login.uid, values)
            setAux(!aux)
            dispatch(addCalories(values))
            modalAddCal.onClose()
            updatedAlert()
            console.log(values);
          })}>
            {({
         values,
         handleChange,
         handleSubmit,
       }) => (

              <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Calorie Burn Goal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsFillLightningChargeFill color={color} />}
                      />
                    <Input type="number" name="totalCalories" value={values.totalCalories} onChange={handleChange} placeholder="Calorie goal" />
                  </InputGroup>
                </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={modalAddCal.onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit" >Done</Button>
            </ModalFooter>
          </ModalContent>
              </form>
       )}
          </Formik>
      </Modal>
      {/* MODAL GET WATER */}
      <Modal
          isOpen={modalAddWater.isOpen}
          onClose={modalAddWater.onClose}
          finalFocusRef={btnAddWater}
          initialFocusRef={btnAddWater}
        >
          <ModalOverlay />
          <Formik
          initialValues={{water: ''}}
          onSubmit={(values => {
            updateUserDataInFirestore(login.uid, values)
            setAux(!aux)
            dispatch(addWater(values))
            calculateWater(setWaterCounter, 2000, values.water)
            modalAddWater.onClose()
            updatedAlert()
            

            console.log(values);
          })}>
            {({
         values,
         handleChange,
         handleSubmit,
       }) => (
              <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>How many glasses of water have you consumed?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<IoIosWater color={color} />}
                      />
                    <Input type="number" name="water" value={values.water} onChange={handleChange} placeholder="glasses of water consumed" />
                  </InputGroup>
                </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={modalAddWater.onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit" >Done</Button>
            </ModalFooter>
          </ModalContent>
              </form>
       )}
       </Formik>
      </Modal>


    </div>:
      <div className="m-auto z-10">
        <CircularProgress isIndeterminate color='green.300'  size={100}/>
      </div>
    }
    </>
  );
};

export default DashboardProfile;
