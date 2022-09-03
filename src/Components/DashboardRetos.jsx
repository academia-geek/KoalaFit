import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Input
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

const DashboardRetos = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-around gap-10'>
            <div className='bg-white shadow-md rounded-2xl py-8 px-8 lg:h-full max-w-xs m-auto items-center divTable'>
                <h1 className='text-center mb-5 font-bold text-gray-800'>Add Challenge</h1>
                <form action="" className='flex flex-col items-center'>
                    <Stack spacing={5}>
                        <Input focusBorderColor='teal.400' placeholder='Name' />
                        <Input focusBorderColor='teal.400' placeholder='Total calories' />
                        <Input focusBorderColor='teal.400' placeholder='Time' />
                        <Button colorScheme='green' type='submit' className=''>Add</Button>
                    </Stack>

                    
                </form>
            </div>

            <div className='bg-white shadow-md rounded-2xl lg:h-[600px] lg:w-[1000px] w-full overflow-y-scroll pt-4 mb-8 m-auto divTable'>
                <TableContainer>
                    <Table size='lg'>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Total calories</Th>
                                <Th>Time</Th>
                                <Th>Play</Th>
                                <Th>Delete</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td >25.4</Td>
                                <Td>
                                    <Button colorScheme='green' >Go</Button>
                                </Td>
                                <Td>
                                    <Button colorScheme='red' >Delete</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td >30.48</Td>
                                <Td>
                                    <Button colorScheme='green' >Go</Button>
                                </Td>
                                <Td>
                                    <Button colorScheme='red' >Delete</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td>0.91444</Td>
                                <Td>
                                    <Button colorScheme='green' >Go</Button>
                                </Td>
                                <Td>
                                    <Button colorScheme='red' >Delete</Button>
                                </Td>
                            </Tr>


                        </Tbody>

                    </Table>
                </TableContainer>
            </div>


        </div>
    )
}

export default DashboardRetos