import React, { useEffect, useRef, useState } from "react";
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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDataInFirestore } from "../helpers/updateUserDataInFirestore";
import { addCalories, addWater, addWHG } from "../Redux/Actions/userActions";
import { updatedAlert } from "../helpers/alerts";
import { calculateCal } from "../helpers/calculateCal";
import { calculateWater } from "../helpers/calculateWater";


const color = '#0FC185'

const initialDataUser = {
  name: 'Name not found',
  photo: 'https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661192604/tp7onnln0bsjvyfmlusf.jpg',
  weight: 64,
  height: '1.70',
  goal: 58,
  calorieGoal: 500,
  calorieBurned: 0,
  water: 0,
}


const DashboardProfile = () => {
  const modalAddWHG = useDisclosure();
  const modalAddCal = useDisclosure();
  const modalAddWater = useDisclosure();
  const btnAddWHG = useRef(null);
  const btnAddCal = useRef(null);
  const btnAddWater = useRef(null);
  const [calCounter, setCalCounter] = useState(0)
  const [waterCounter, setWaterCounter] = useState(0)

  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  console.log(login);

  return (
    <div className="flex flex-col items-center pt-8 justify-around gap-8 ">
      <div className="bg-white relative shadow-md max-w-xs w-full flex flex-col items-center rounded-3xl px-8 pb-8 ">
        <div onClick={modalAddWHG.onOpen} ref={btnAddWHG} className="h-8 shadow-none right-4 top-4 absolute cursor-pointer">
          <FiEdit color="#0FC185" size={20} />
        </div>
        <div className="h-24 w-24 flex justify-center -mt-10">
          <img
            src={login ?  login.photoURL : initialDataUser.photo }
            alt="Profile img"
            className="h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col mt-4 text-center gap-2 border-b-2 w-[70%] pb-3">
          <p className="font-bold">{login ? login.displayName : initialDataUser.name }</p>
          <p className="text-textColor">29 years, Medellin</p>
        </div>

        <div className="flex justify-around items-center pt-4 w-full">
          <div className="flex flex-col">
            <p className="text-primary text-sm">Weight</p>
            <p className="text-lg font-semibold">{login.whg ? login.whg.weight : initialDataUser.weight } kg</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary text-sm">Height</p>
            <p className="text-lg font-semibold">{login.whg ? login.whg.height : initialDataUser.height } m</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary text-sm">Goal</p>
            <p className="text-orange-400 font-semibold">{login.whg ? login.whg.goal : initialDataUser.goal } kg</p>
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
              <p>{login.calories ? login.calories.calories : initialDataUser.calorieGoal } kcal</p>
            </div>

            <div className="mt-6">
              <p className="text-textColor">Burned</p>
              <p>430 kcal</p>
            </div>
          </div>
          <div className="h-36 w-36 text-center font-semibold text-primary mb-4">
            <CircularProgressbar
              value={calCounter}
              text={`${calCounter} %`}

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

      {/* MODAL USER WEIGHT - HEIGHT - GOAL */}
      <Modal
          isOpen={modalAddWHG.isOpen}
          onClose={modalAddWHG.onClose}
          finalFocusRef={btnAddWHG}
          initialFocusRef={btnAddWHG}
          isCentered
        >
          <ModalOverlay />
          <Formik
            initialValues={{weight: '', height: '', goal: ''}}
            onSubmit={(values => {
              updateUserDataInFirestore(login.uid, values)
              dispatch(addWHG(values))
              modalAddWHG.onClose()
              updatedAlert()
              console.log(values);
            })}
          >
            {({
         values,
         handleChange,
         handleSubmit,
       }) => (
              <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Enter your weight, height and goal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<GiWeight color={color} />}
                      />
                    <Input type="number" name="weight" value={values.weight} onChange={handleChange} placeholder="Your weight in kg" />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<GiBodyHeight color={color} />}
                    />
                    <Input type="number" name="height" value={values.height} onChange={handleChange} placeholder="Your height in cm" />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<GiStairsGoal color={color} />}
                    />
                    <Input type="number" name="goal" value={values.goal} onChange={handleChange} placeholder="Your ideal weight goal" />
                  </InputGroup>
                </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={modalAddWHG.onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit" >Done</Button>
            </ModalFooter>
          </ModalContent>
              </form>
              )}
          </Formik>
      </Modal>
      {/* MODAL GET CALORIES */}
      <Modal
          isOpen={modalAddCal.isOpen}
          onClose={modalAddCal.onClose}
          finalFocusRef={btnAddCal}
          initialFocusRef={btnAddCal}
        >
          <ModalOverlay />
          <Formik
          initialValues={{calories: ''}}
          onSubmit={(values => {
            updateUserDataInFirestore(login.uid, values)
            dispatch(addCalories(values))
            modalAddCal.onClose()
            calculateCal(setCalCounter, 300, values.calories)
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
                    <Input type="number" name="calories" value={values.calories} onChange={handleChange} placeholder="Calorie goal" />
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


    </div>
  );
};

export default DashboardProfile;
