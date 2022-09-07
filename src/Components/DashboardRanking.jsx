import React, { useEffect, useState } from 'react'
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
    Button
} from '@chakra-ui/react'
import { db } from '../Firebase/firebaseConfig';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';


const DashboardRanking = () => {
    const idUser = localStorage.getItem("idUserLogin")
    let rankingOrder
    const [ranking, setRanking] = useState()
    const [rank, setRank] = useState()
    const [challengesCompleted, setChallengesCompleted] = useState()
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
        let cosa 
        array2.map((e, i = 0) => {
            if(e.id == idUser){
                setRank(i+1)
                setChallengesCompleted(e.contadorRetos)
            }
        })
        
    }

    const functioRara = (a, b) => {
        if (a.contadorRetos > b.contadorRetos) {
            return -1;
        }
        if (a.contadorRetos < b.contadorRetos) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        datosRanking(setRanking)
    }, [])

    
    
    return (
        <div className='mt-12 flex flex-col items-center lg:px-20 px-2  py-20 border mx-auto rounded-3xl shadow-lg bg-white w-11/12'>
            <div className='flex flex-col lg:flex-row w-full items-center justify-around'>

                <div className='flex flex-col items-center w-full'>
                    <h1 className='font-extralight text-4xl text-gray-800'>Your Rank</h1>
                    <h1 className='text-[50px] mb-2'>#{rank? rank: "you have no rank"}</h1>
                    <div className='-mt-20'>
                        <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1662170285/Demdoay/platinum_fl3uny.png" alt="" />
                    </div>
                    <h1 className='text-xl'>Number Challenges Completed</h1>
                    <h1 className='text-[50px]'>{challengesCompleted? challengesCompleted: 0}</h1>

                </div>

                <div className='text-center leading-[70px] flex flex-col items-center  w-full'>
                    <h1 className='font-extralight italic text-4xl'>Top Rank</h1>
                    <span className='text-[40px] lg:text-[40px] font-bold text-primary not-italic'>Challenge</span>
                    <GiTrophy size={100} color='#f7d413' />
                    <div className='divTable w-full mt-10  text-center overflow-y-scroll'>
                        <TableContainer>
                            <Table size='lg'>
                                <Thead>
                                    <Tr>
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

        </div>
    )
}

export default DashboardRanking