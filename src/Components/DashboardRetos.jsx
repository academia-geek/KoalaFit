import React, { useEffect, useRef, useState } from "react";
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
import { useSelector } from "react-redux";
import ProgressTimer from "./counterProgressBar/ProgressTimer";
import { challenges } from "../Data/challenges";

const DashboardRetos = () => {
    const user = useSelector((state) => state.login)
    const retosObject = { challenges }
    const idUser = localStorage.getItem("idUserLogin")
    const [aux, setAux] = useState(false)
    const [dataAux, setDataAux] = useState([])
    const [data, setData] = useState('');
    const [counter, setCounter] = useState()
    const modalTimer = useDisclosure();
    const modalBtn = useRef(null);
    const { formValue, handleInputChangeName, reset } = useForm({
        name: "",
        totalCalories: "",
        totalTime: "",
    });

    useEffect(() => {


        const calldata = async () => {
            const prueba = doc(db, "challenge", idUser)
            const prueba2 = await getDoc(prueba)

            setData(prueba2.data() && prueba2.data().challenges)
            if (!data) {
                retosDefecto()
            }
        };

        calldata();


    }, [aux]);

    const retosDefecto = async () => {
        const uid = idUser
        await setDoc(doc(db, 'challenge', uid), retosObject)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uid = idUser
        const datas = {

            name: formValue.name,
            totalCalories: formValue.totalCalories,
            totalTime: formValue.totalTime,
            uid: crypto.randomUUID()

        }

        let challenges = (data != null ? data.concat(datas) : datas)

        const datas2 = {
            challenges
        }


        const vari = await setDoc(doc(db, 'challenge', uid), datas2)
        setAux(!aux)

    }

    const click = (name, totalCalories, totalTime, uid) => {
        const dt = new Date()

        const date = (`${dt.getDay()}/${dt.getMonth()}/${dt.getFullYear()}`)

        const DataUsertoHistorial = {
            name,
            totalCalories,
            totalTime,
            date:date,
            uid,
        };
        setCounter(totalTime);
        setDataAux(DataUsertoHistorial);
    };

    const handleDelete = ({ target }) => {
        const index = data.filter(e => e.uid !== target.id)

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
        auxHistory = History && History.data() ;

        if (History.data() === undefined) {
            auxHistory = [dataAux];

            const datas = {
                auxHistory
            }
            await setDoc(doc(db, "History", idUser), datas);
        } else {
            
            const RefHistory = doc(db, "History", idUser);

            await updateDoc(RefHistory, {
            auxHistory: arrayUnion(dataAux)});
        }
        modalTimer.onClose()
    };



    return (
        <>
            <div className="flex flex-col lg:flex-row justify-around gap-10">

                <div className="bg-white shadow-md rounded-2xl py-8 px-8 lg:h-full max-w-xs m-auto items-center divTable">
                    <h1 className="text-center mb-5 font-bold text-gray-800">
                        Add Challenge
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <Stack spacing={5}>
                            <Input
                                onChange={handleInputChangeName}
                                name="name"
                                focusBorderColor="teal.400"
                                placeholder="Name"
                            />
                            <Input
                                onChange={handleInputChangeName}
                                name="totalCalories"
                                focusBorderColor="teal.400"
                                placeholder="Total calories"
                            />
                            <Input
                                onChange={handleInputChangeName}
                                name="totalTime"
                                focusBorderColor="teal.400"
                                placeholder="Time"
                            />
                            <Button colorScheme="green" type="submit" className="">
                                Add
                            </Button>
                        </Stack>
                    </form>
                </div>

                <div className="bg-white shadow-md rounded-2xl lg:h-[600px] lg:w-[1000px] w-full overflow-y-scroll pt-4 mb-8 m-auto divTable">
                    <TableContainer >
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
                                                <Button colorScheme="green" onClick={() => { modalTimer.onOpen(); click(name, totalCalories, totalTime, uid) }}>Go</Button>
                                            </Td>
                                            <Td>
                                                <Button colorScheme="yellow" >Editar</Button>
                                            </Td>
                                            <Td>
                                                <Button onClick={(e) => handleDelete(e)} id={uid} colorScheme="red">Delete</Button>
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <Modal
                isOpen={modalTimer.isOpen}
                onClose={modalTimer.onClose}
                finalFocusRef={modalBtn}
                initialFocusRef={modalBtn}
                isCentered
            >
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <ProgressTimer countdownTimestampMs={counter * 60} />
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
                        <Button colorScheme="green" type="button" onClick={handleDoneHistorial}>
                            Done
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );

}

export default DashboardRetos;
