import React, { useRef, useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
import { Formik } from "formik";
import { GiBodyHeight, GiStairsGoal, GiWeight } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addEditInfoUser, addWHG } from "../Redux/Actions/userActions";
import { updatedAlert } from "../helpers/alerts";
import { updateUserDataInFirestore } from "../helpers/updateUserDataInFirestore";

const color = "#0FC185";


const DashboardProfileMenu = () => {
    const [userImg, setUserImg] = useState('')

    const modalAddWHG = useDisclosure();
    const modalEditUser = useDisclosure();
    const btnAddWHG = useRef(null);
    const btnEditUser = useRef(null);

    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: 'ikevinmejia',
        uploadPreset: 'v3uthz1p'
      }, async (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);
          const urlImgCloudinary = await result.info.secure_url
          setUserImg(urlImgCloudinary)
        }
      })

  const handleCloudinary = () => {
    widget_cloudinary.open(), false
  }

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<RiMenuFoldFill color={color} size="20" />}
          variant="ghost"
        />
        <MenuList>
          <MenuItem
            icon={<CgAddR color={color} size="20" />}
            onClick={modalAddWHG.onOpen}
            ref={btnAddWHG}
          >
            Add info
          </MenuItem>
          <MenuItem
            icon={<FiEdit color={color} size="20" />}
            onClick={modalEditUser.onOpen}
            ref={btnEditUser}
          >
            Edit account
          </MenuItem>
        </MenuList>
      </Menu>

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
          initialValues={{ weight: "", height: "", goal: "" }}
          onSubmit={(values) => {
            updateUserDataInFirestore(login.uid, values);
            dispatch(addWHG(values));
            modalAddWHG.onClose();
            updatedAlert();
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
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
                      <Input
                        type="number"
                        name="weight"
                        value={values.weight}
                        onChange={handleChange}
                        placeholder="Your weight in kg"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiBodyHeight color={color} />}
                      />
                      <Input
                        type="number"
                        name="height"
                        value={values.height}
                        onChange={handleChange}
                        placeholder="Your height in cm"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiStairsGoal color={color} />}
                      />
                      <Input
                        type="number"
                        name="goal"
                        value={values.goal}
                        onChange={handleChange}
                        placeholder="Your ideal weight goal"
                      />
                    </InputGroup>
                  </Stack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    mr={3}
                    onClick={modalAddWHG.onClose}
                  >
                    Close
                  </Button>
                  <Button colorScheme="green" type="submit">
                    Done
                  </Button>
                </ModalFooter>
              </ModalContent>
            </form>
          )}
        </Formik>
      </Modal>
      {/* MODAL Edit profile */}
      <Modal
        isOpen={modalEditUser.isOpen}
        onClose={modalEditUser.onClose}
        finalFocusRef={btnEditUser}
        initialFocusRef={btnEditUser}
        isCentered
      >
        <ModalOverlay />
        <Formik
          initialValues={{ displayName: "", age: "", city: ""}}
          onSubmit={(values) => {
            values.img = userImg;
            updateUserDataInFirestore(login.uid, values);
            dispatch(addEditInfoUser(values));
            modalEditUser.onClose();
            updatedAlert();
            console.log(login);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <ModalContent>
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiWeight color={color} />}
                      />
                      <Input
                        type="text"
                        name="displayName"
                        value={values.displayName}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiBodyHeight color={color} />}
                      />
                      <Input
                        type="number"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        placeholder="Your age"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiStairsGoal color={color} />}
                      />
                      <Input
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        placeholder="Your city"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<GiStairsGoal color={color} />}
                      />
                      <Input
                        type="button"
                        name="img"
                        value={'Select a file'}
                        onChange={handleChange}
                        onClick={() => handleCloudinary()}
                        placeholder="Add a new profile img"
                      />
                    </InputGroup>
                  </Stack>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    mr={3}
                    onClick={modalEditUser.onClose}
                  >
                    Close
                  </Button>
                  <Button colorScheme="green" type="submit">
                    Done
                  </Button>
                </ModalFooter>
              </ModalContent>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default DashboardProfileMenu;
