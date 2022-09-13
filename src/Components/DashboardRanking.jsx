import React, { useContext, useEffect, useState } from 'react'
import { GiTrophy } from 'react-icons/gi';
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
    Button,
    Progress
} from '@chakra-ui/react'
import { db } from '../Firebase/firebaseConfig';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Context } from '../Context/ContextProvider';


const DashboardRanking = () => {
    const idUser = localStorage.getItem("idUserLogin")
    const [ranking, setRanking] = useState()
    const [rank, setRank] = useState()
    const [challengesCompleted, setChallengesCompleted] = useState(null)
    const [range, setRange] = useState('')

    const datosRanking = async (state) => {

        const historyRef = await getDocs(collection(db, "History"))
        let contadorRetos = 0
        let contadorCalorias = 0
        let contadorTiempo = 0
        let arrayRanking = []
        let id
        let name


        historyRef.forEach((doc1) => {
            let aux = doc1.data().auxHistory
            contadorRetos = 0
            contadorCalorias = 0
            contadorTiempo = 0
            aux.forEach((doc2, i = 0) => {

                contadorRetos = i + 1
                contadorCalorias += Number(doc2.totalCalories)
                contadorTiempo += Number(doc2.totalTime)
                id = doc1.id
                name = doc2.nameUser

            })
            const datos = {
                contadorRetos,
                contadorCalorias,
                contadorTiempo,
                id,
                name
            }
            arrayRanking.push(datos)


        })


        const array2 = arrayRanking.sort(functioRara);
        state(array2)

        array2.map((e, i = 0) => {
            if (e.id == idUser) {
                setRank(i + 1)
                setChallengesCompleted(e.contadorRetos)
            }
        })
        rango(challengesCompleted)
    }


    const rango = (challengesCompleted) => {

        if (challengesCompleted < 25) {
            setRange('https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025120/Demdoay/rango0-0_ergx0e.png')
        }

        if (challengesCompleted >= 25 && challengesCompleted < 50) {
            setRange('https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025124/Demdoay/rango1-1_d5dktm.png')
        }

        if (challengesCompleted >= 50 && challengesCompleted < 75) {
            setRange('https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025128/Demdoay/rango2-2_wird3l.png')
        }

        if (challengesCompleted >= 75 && challengesCompleted < 100) {
            setRange('https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025132/Demdoay/rango3-3_s99uu2.png')
        }

        if (challengesCompleted >= 100) {
            setRange('https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025135/Demdoay/rang_superior_yjwhdo.png')
        }

    }

    const functioRara = (a, b) => {
        if (a.contadorRetos > b.contadorRetos) {
            return -1;
        }
        if (a.contadorRetos < b.contadorRetos) {
            return 1;
        }
        if (a.contadorRetos == b.contadorRetos) {
            if (a.contadorCalorias > b.contadorCalorias) {
                return -1;
            }
            if (a.contadorCalorias < b.contadorCalorias) {
                return 1;
            }
        }
        return 0;
    }

    useEffect(() => {
        datosRanking(setRanking)
    }, [challengesCompleted])




    return (
        <>


            <div className='mt-12 flex flex-col items-center lg:px-20 px-2  py-14 border mx-auto rounded-3xl shadow-lg bg-white w-11/12 '>
                <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-10'>

                    <div className='flex flex-col items-center w-full  min-w-max'>
                        <h1 className='font-extralight text-4xl text-gray-800'>Your Rank</h1>
                        <h1 className='text-[50px] mb-2'>#{rank ? rank : "you have no rank"}</h1>
                        <div className='-mt-4 mr-8 w-72'>
                            <img src={range} alt="" />
                        </div>
                        <div className='mt-6 mb-8'>
                            <div className='flex justify-between items-center'>
                                <div className='w-14 text-center -ml-6'>
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025120/Demdoay/rango0-0_ergx0e.png" alt="" />
                                    <h1>0</h1>
                                </div>
                                <div className='w-14 text-center'>
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025124/Demdoay/rango1-1_d5dktm.png" alt="" />
                                    <h1>25</h1>
                                </div>
                                <div className='w-14 text-center'>
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025128/Demdoay/rango2-2_wird3l.png" alt="" />
                                    <h1>50</h1>
                                </div>
                                <div className='w-14 text-center'>
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025132/Demdoay/rango3-3_s99uu2.png" alt="" />
                                    <h1>75</h1>
                                </div>
                                <div className='w-14 text-center'>
                                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1663025135/Demdoay/rang_superior_yjwhdo.png" alt="" />
                                    <h1>100</h1>
                                </div>
                            </div>
                            <Progress colorScheme='green' size='sm' value={challengesCompleted} />
                        </div>
                        <h1 className='text-xl'>Number Challenges Completed</h1>
                        <h1 className='text-[50px]'>{challengesCompleted ? challengesCompleted : 0}</h1>

                    </div>

                    <div className='text-center leading-[70px] flex flex-col items-center w-full lg:w-[65%] lg:px-10'>
                        <h1 className='font-extralight italic text-4xl'>Top Rank</h1>
                        <span className='text-[40px] lg:text-[40px] font-bold text-primary not-italic'>Challenge</span>
                        <GiTrophy size={100} color='#f7d413' />

                        <TableContainer className='h-[400px] mt-10 divTable ' overflowY="auto" >
                            <Table size='md' variant={"simple"}   >
                                <Thead>
                                    <Tr>
                                        <Th>Rank</Th>
                                        <Th>Name</Th>
                                        <Th>Total calories</Th>
                                        <Th>Total time</Th>
                                        <Th >Challenges completed</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        ranking &&
                                        ranking.map((e, idx = 0) => (
                                            <Tr key={idx}>
                                                <Td>{idx + 1}</Td>
                                                <Td>{e.name}</Td>
                                                <Td>{e.contadorCalorias}</Td>
                                                <Td>{e.contadorTiempo} Minutes</Td>
                                                <Td>{e.contadorRetos}</Td>
                                            </Tr>
                                        ))

                                    }

                                </Tbody>

                            </Table>
                        </TableContainer>

                    </div>
                </div>

            </div>


        </>
    )
}

export default DashboardRanking