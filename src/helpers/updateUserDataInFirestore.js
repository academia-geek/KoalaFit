import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const updateUserDataInFirestore = async(uid, data) => {
    const ref = doc(db, "users", uid);
    await updateDoc(ref, data);
}