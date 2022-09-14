import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Context } from "../Context/ContextProvider";
import { BsClockHistory } from "react-icons/bs";


const DashboardHistory = () => {
  
  const idUser = localStorage.getItem("idUserLogin")
  const [data, setData] = useState([]);
  const [actualDate, setActualDate] = useState()


  useEffect(() => {
    const calldata = async () => {
      const DirecHistory = doc(db, "History", idUser)
      const History = await getDoc(DirecHistory)
      setData(History.data().auxHistory)
    };
    calldata();
  }, []);



  return (
    <>
    <div className="w-full  text-center mt-14 flex flex-col items-center">
      <div className="flex flex-col items-center divTable rounded-lg ring-primary bg-white p-4 gap-2">
      <h1 className="font-bold text-4xl text-primary">History</h1>
      <BsClockHistory size={30} color={"#0FC185"}/>
      </div>
    </div>
    <div className="divTable mx-auto mt-6 max-w-4xl justify-center text-center w-11/12 bg-fourty rounded-2xl">
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Total calories</Th>
              <Th>Total time</Th>
              <Th>Completed date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map(({ name, totalCalories, totalTime, date }, idx) => (
                <Tr key={idx}>
                  <Td>{name}</Td>
                  <Td>{totalCalories}</Td>
                  <Td>{totalTime}</Td>
                  <Td>{date}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default DashboardHistory;
