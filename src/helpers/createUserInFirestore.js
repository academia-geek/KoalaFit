import { db } from "../Firebase/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";

export const createUserInFirestore = async (uid, data) => {
    await setDoc(doc(db, 'users', uid), data)
}