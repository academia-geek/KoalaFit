import React, { useContext, useRef, useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FaRegFileImage } from "react-icons/fa";
import { GiBodyHeight, GiStairsGoal, GiWeight } from "react-icons/gi";
import { IoCalendarNumberOutline, IoLocationSharp } from "react-icons/io5";
import { MdOutlineDelete, MdDriveFileRenameOutline } from "react-icons/md";
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
import { doc, deleteDoc } from "firebase/firestore";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addEditInfoUser, addWHG } from "../Redux/Actions/userActions";
import { updatedAlert } from "../helpers/alerts";
import { updateUserDataInFirestore } from "../helpers/updateUserDataInFirestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db } from "../Firebase/firebaseConfig";
import { getAuth } from "firebase/auth";
import { Context } from "../Context/ContextProvider";

const MySwal = withReactContent(Swal);

const color = "#0FC185";


const DashboardProfileMenu = () => {
  const auth = getAuth();
  const { uid } = useSelector(
    (state) => state.login
  );
    const [userImg, setUserImg] = useState('')

    const modalAddWHG = useDisclosure();
    const modalEditUser = useDisclosure();
    const btnAddWHG = useRef(null);
    const btnEditUser = useRef(null);
    const {aux,setAux} = useContext(Context)
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const idUser = localStorage.getItem("idUserLogin")

    const deleteAccount = () => {
      MySwal.fire({
        title: "Do you want to delete your account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DC2626',
        confirmButtonText: "Yes",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          deleteDoc(doc(db, "users", idUser));
          MySwal.fire("Account deleted!", "", "success");
          auth.signOut();
        }
      });
    };

    const widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: 'ikevinmejia',
        uploadPreset: 'v3uthz1p'
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);
          setUserImg(result.info.secure_url)
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
            Edit profile
          </MenuItem>
          <MenuItem
            icon={<MdOutlineDelete color={'red'} size="20" />}
            color={'red'}
            onClick={deleteAccount}
          >
            Delete Account
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
            setAux(!aux)
            updateUserDataInFirestore(idUser, values);   
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
                  <Button colorScheme="green" type="submit" >
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
          initialValues={{ displayName: "", age: "", city: "", uid: idUser}}
          onSubmit={(values) => {
            values.photoURL = userImg;
            updateUserDataInFirestore(idUser, values);
            setAux(!aux)
            dispatch(addEditInfoUser(values));
            modalEditUser.onClose();
            updatedAlert(); 
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
                        children={<MdDriveFileRenameOutline color={color} />}
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
                        children={<IoCalendarNumberOutline color={color} />}
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
                        children={<IoLocationSharp color={color} />}
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
                        children={<FaRegFileImage color={color} />}
                      />
                      <Input
                        type="button"
                        name="photoURL"
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
                  <Button colorScheme="green" type="submit" >
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
