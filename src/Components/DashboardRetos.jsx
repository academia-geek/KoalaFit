import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Input,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useForm } from "../Hooks/useForm";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import ProgressTimer from "./counterProgressBar/ProgressTimer";
import { challenges } from "../Data/challenges";
import lodash from "lodash";
import { addHistoryOfCalories } from "../Redux/Actions/userActions";
import { Context } from "../Context/ContextProvider";
import { calculateCal } from "../helpers/calculateCal";
import EditModal from "./EditModal";

const DashboardRetos = () => {
  const { blockProgress } = useContext(Context);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const retosObject = { challenges };
  const idUser = localStorage.getItem("idUserLogin");
  const [aux, setAux] = useState(false);
  const [switche, setSwitche] = useState(false);
  const [dataAux, setDataAux] = useState([]);
  const [data, setData] = useState();
  const [counter, setCounter] = useState();
  const modalTimer = useDisclosure();
  const modalEdit = useDisclosure();
  const modalBtn = useRef(null);
  const [dataSlimC, setDataSlimC] = useState([]);
  const [switchBtns, setSwitchBtns] = useState([]);

  const { formValue, handleInputChangeName, reset } = useForm({
    name: "",
    totalCalories: "",
    totalTime: "",
  });

  useEffect(() => {
    const calldata = async () => {
      const prueba = doc(db, "challenge", idUser);
      const prueba2 = await getDoc(prueba);
      setData(prueba2.data() && prueba2.data().challenges);
      if (!prueba2.data()) {
        retosDefecto();
      }
    };

    calldata();
  }, [aux]);

  const retosDefecto = async () => {
    const uid = idUser;
    await setDoc(doc(db, "challenge", uid), retosObject);
    console.log("sarna");
    setAux(!aux);
  };

  //me gusta la poia

  const click = async (name, totalCalories, totalTime, uid) => {
    const dt = new Date();
    const dataNameRef = doc(db, "users", idUser);
    const dataName = await getDoc(dataNameRef);
    const date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
    const DataUsertoHistorial = {
      name,
      totalCalories,
      totalTime,
      date: date,
      uid: crypto.randomUUID(),
      nameUser: dataName.data().displayName,
    };
    setCounter(totalTime);
    setDataAux(DataUsertoHistorial);
  };

  const handleDelete = ({ target }) => {
    const index = data.filter((e) => e.uid !== target.id);
    // const array = [index]
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0FC185",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const retoDelete = doc(db, "challenge", idUser);
        await updateDoc(retoDelete, {
          challenges: index,
        });
        setAux(!aux);
      }
    });
  };

  const handleDoneHistorial = async () => {
    let auxHistory = null;
    const IdHistory = doc(db, "History", idUser);
    const History = await getDoc(IdHistory);
    auxHistory = History && History.data();

    if (History.data() === undefined) {
      auxHistory = [dataAux];

      const datas = {
        auxHistory,
      };
      await setDoc(doc(db, "History", idUser), datas);
    } else {
      const RefHistory = doc(db, "History", idUser);

      await updateDoc(RefHistory, {
        auxHistory: arrayUnion(dataAux),
      });
    }

    const auxFunction = () => {
      const puntos = auxHistory.auxHistory.map((cal) =>
        Number(cal.totalCalories)
      );

      const totalCal = lodash.sum(puntos);

      dispatch(addHistoryOfCalories(totalCal));
      console.log(login.calories);
    };

    auxHistory.auxHistory && auxFunction();
    modalTimer.onClose();
  };

  const handleEditChallenge = ({ target }) => {
    setSwitche(target.id);
  };

  const handleSlimDown = async () => {
    const aux = [];
    const DataSlim = await getDocs(collection(db, "SlimDown"));
    DataSlim.forEach((doc) => {
      aux.push(doc.data());
    });
    setSwitchBtns(1);
    setDataSlimC(aux);
  };

  const handleGetStrong = async () => {
    const aux = [];
    const DataSlim = await getDocs(collection(db, "GetStrong"));
    DataSlim.forEach((doc) => {
      aux.push(doc.data());
    });
    setSwitchBtns(2);
    setDataSlimC(aux);
  };

  const handleOnClick = async (name, totalTime, totalCalories, uid) => {
    const DatosChallenge = {
      name,
      totalTime,
      totalCalories,
      uid,
    };
    const RefChallenge = doc(db, "challenge", idUser);
    await updateDoc(RefChallenge, {
      challenges: arrayUnion(DatosChallenge),
    });
    setAux(!aux);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around gap-5">
        <div className="w-11/12 mx-auto lg:w-[400px] h-full">
          <div className="flex justify-center text-white mb-5 gap-4">
            <Button onClick={handleSlimDown} background={"#1EAB7B"}>
              Slim down
            </Button>
            <Button onClick={handleGetStrong} background={"#86BBEF"}>
              Get strong
            </Button>
          </div>
          <div className="bg-white p-4 rounded-3xl relative shadow-md sm:rounded-lg h-[200px] lg:h-[400px] overflow-y-auto ">
            <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400  h-full ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="py-3">
                    Challene Name
                  </th>
                  <th scope="col" className="py-3">
                    Time
                  </th>
                  <th scope="col" className="py-3">
                    Calories
                  </th>
                  <th scope="col" className="py-3">
                    <span className="sr-only">add</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSlimC.map(
                  ({ name, totalTime, totalCalories, uid }, idx) => (
                    <tr
                      key={idx}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {name}
                      </th>
                      <td className="py-4 px-2">{totalTime}</td>
                      <td className="py-4 px-2">{totalCalories}</td>
                      <td className="py-4 px-2 text-right">
                        <Button
                          background={"#D49A72"}
                          color={"white"}
                          id={uid}
                          onClick={() =>
                            handleOnClick(name, totalTime, totalCalories, uid)
                          }
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl lg:h-[600px] lg:w-[1000px] w-full overflow-y-scroll pt-4 mb-8 m-auto divTable">
          <TableContainer>
            <Table size="lg" variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Total calories</Th>
                  <Th>Time</Th>
                  <Th>Play</Th>
                  <Th>Editar Time</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map(({ name, totalCalories, totalTime, uid }, idx) => (
                    <Tr key={idx} id={uid}>
                      <Td>{name}</Td>
                      <Td>{totalCalories}</Td>
                      <Td>{totalTime}</Td>

                      <Td>
                        <Button
                          colorScheme="green"
                          onClick={() => {
                            modalTimer.onOpen();
                            click(name, totalCalories, totalTime, uid);
                          }}
                        >
                          Go
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="yellow"
                          onClick={(e) => {
                            modalEdit.onOpen();
                            handleEditChallenge(e);
                          }}
                          id={uid}
                        >
                          Edit
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          onClick={(e) => handleDelete(e)}
                          id={uid}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* primer modal */}
      <Modal
        isOpen={modalTimer.isOpen}
        onClose={modalTimer.onClose}
        finalFocusRef={modalBtn}
        initialFocusRef={modalBtn}
        isCentered
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <ProgressTimer countdownTimestampMs={counter} />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="ghost"
              mr={3}
              onClick={modalTimer.onClose}
            >
              Close
            </Button>
            {blockProgress === true ? (
              <Button
                colorScheme="green"
                type="button"
                onClick={handleDoneHistorial}
              >
                Done
              </Button>
            ) : (
              <Button colorScheme="green" type="text">
                Done
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Segundo modal */}
      <Modal
        isOpen={modalEdit.isOpen}
        onClose={modalEdit.onClose}
        finalFocusRef={modalBtn}
        initialFocusRef={modalBtn}
        isCentered
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Edit Time</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <EditModal id={switche} />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              type="button"
              onClick={() => {
                modalEdit.onClose(), setAux(!aux);
              }}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DashboardRetos;
