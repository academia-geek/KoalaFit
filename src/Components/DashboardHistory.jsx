import React from "react";
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
    <div className="divTable mx-auto mt-10 max-w-2xl justify-center text-center w-11/12 bg-fourty rounded-2xl">
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
  );
};

export default DashboardHistory;
