import React from 'react'
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


const DashboardRanking = () => {
    return (
        <div className='mt-12 flex flex-col items-center lg:px-20 px-2  py-20'>
            <div className='flex flex-col lg:flex-row w-full items-center justify-around'>

                <div className='flex flex-col items-center w-full'>
                    <h1 className='font-extralight text-4xl text-gray-800'>Your Rank</h1>
                    <h1 className='text-[50px]'>#450</h1>
                    <div className='-mt-20'>
                        <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1662170285/Demdoay/platinum_fl3uny.png" alt="" />
                    </div>
                    <h1 className='text-xl'>Number Challenges Completed</h1>
                    <h1 className='text-[50px]'>150</h1>

                </div>

                <div className='text-center leading-[70px] flex flex-col items-center  w-full'>
                    <h1 className='font-extralight italic text-4xl'>Top Rank</h1>
                    <span className='text-[40px] lg:text-[40px] font-bold text-primary not-italic'>Challenge</span>
                    <GiTrophy size={100} color='#f7d413' />
                    <div className='divTable w-full mt-10 text-center'>
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
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td >25.4</Td>
                                        <Td >700</Td>
                                        
                                    </Tr>
                                    <Tr>
                                        <Td>feet</Td>
                                        <Td>centimetres (cm)</Td>
                                        <Td >30.48</Td>
                                        <Td>698</Td>
                                        
                                    </Tr>
                                    <Tr>
                                        <Td>yards</Td>
                                        <Td>metres (m)</Td>
                                        <Td>0.91444</Td>
                                        <Td>454</Td>    
                                    </Tr>


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