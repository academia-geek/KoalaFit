import React, { useRef } from "react";
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

const color = '#0FC185'
const ModalDashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const btnRef = useRef(null);

  return (
    <div className="bg-secondary w-full h-screen flex flex-col items-center pt-8 md:px-20 px-4 justify-around">
      <div className="bg-white shadow-md max-w-xs w-full flex flex-col items-center rounded-3xl px-8 pb-8 min-w-min">
        <Button onClick={onOpen} ref={btnRef}>
          Open Modal
        </Button>
        {/* MODAL USER WEIGHT - HEIGHT - GOAL */}
        {/* <Modal
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          initialFocusRef={btnRef}
        >
          <ModalOverlay />
          <Formik
            initialValues={{weight: '', height: '', goal: ''}}
            onSubmit={(values => {
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
              <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit" >Done</Button>
            </ModalFooter>
          </ModalContent>
              </form>
              )}
          </Formik>
        </Modal> */}
        {/* MODAL GET CALORIES */}
        {/* <Modal
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          initialFocusRef={btnRef}
        >
          <ModalOverlay />
          <Formik
          initialValues={{calories: ''}}
          onSubmit={(values => {
            console.log(values);
          })}>
            {({
         values,
         handleChange,
         handleSubmit,
       }) => (

              <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>How many calories have you consumed?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsFillLightningChargeFill color={color} />}
                      />
                    <Input type="number" name="calories" value={values.calories} onChange={handleChange} placeholder="Calories consumed" />
                  </InputGroup>
                </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" type="submit" >Done</Button>
            </ModalFooter>
          </ModalContent>
              </form>
       )}
          </Formik>
        </Modal> */}
        {/* MODAL GET WATER */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          initialFocusRef={btnRef}
        >
          <ModalOverlay />
          <Formik
          initialValues={{water: ''}}
          onSubmit={(values => {
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
              <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
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
    </div>
  );
};

export default ModalDashboard;
