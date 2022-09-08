import { db } from "../Firebase/firebaseConfig";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";



export const createUserInFirestore = async (uid, data) => {
  
  const idUser = localStorage.getItem("idUserLogin");
  const userRef = await getDocs(collection(db, "users"));
  let cualquiera = 0

  userRef.forEach((doc) => {
    if (doc.data().uid == idUser) {
      cualquiera = 1
    }
  });


  if (cualquiera == 0) {
    await setDoc(doc(db, "users", uid), data);
  }
};
