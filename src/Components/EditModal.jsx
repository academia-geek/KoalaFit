import { Button, Input, Stack } from "@chakra-ui/react";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../Firebase/firebaseConfig";
import { useForm } from "../Hooks/useForm";

const EditModal = (ex) => {
  const { formValue, handleInputChangeName, reset } = useForm({
    totalTime: "",
  });
  const idUser = localStorage.getItem("idUserLogin");

  const handleAcept = async () => {
    let SaveResult;
    const prueba = doc(db, "challenge", idUser);
    const prueba2 = await getDoc(prueba);
    const dataAux = prueba2.data();
    const dataAux2 = dataAux.challenges;
    
    dataAux2.forEach(async (e) => {
      if (e.uid == ex.id) {
        SaveResult=e;
        const result = dataAux2.filter((e) => e.uid !== ex.id)
        const retoDelete = doc(db, "challenge", idUser);
        await updateDoc(retoDelete, {
          challenges: result,
        });
        const dataR = {
          name:SaveResult.name,
          totalCalories:SaveResult.totalCalories,
          totalTime:formValue.totalTime,
          uid:SaveResult.uid,
        }
        const aux = await updateDoc(retoDelete, {
          challenges: arrayUnion(dataR)
      }); 
      console.log(aux);
      }
    });

    /* const result = dataAux2.filter((e) => e.uid === ex.id);

    SaveResult=result;

    const dataR = {
      name:SaveResult[0].name,
      totalCalories:SaveResult[0].totalCalories,
      totalTime:formValue.totalTime,
      uid:SaveResult[0].uid,
    } */
    /* const retoDelete = doc(db, "challenge", idUser);
    await updateDoc(retoDelete, {
      challenges: result,
    }); */

    /* const EditRoute = doc(db, "challenge", idUser);
    await updateDoc(EditRoute, {
      totalTime: arrayRemove(result)
    }); */

    /* await updateDoc(EditRoute, {
      totalTime: arrayUnion(dataR)
  }); */
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Stack spacing={2}>
        <Input
          onChange={handleInputChangeName}
          name="totalTime"
          focusBorderColor="teal.400"
          placeholder="Time"
          type="number"
        />
        <Button
          onClick={handleAcept}
          colorScheme="green"
          type="submit"
          className=""
        >
          Acept
        </Button>
      </Stack>
    </div>
  );
};

export default EditModal;
