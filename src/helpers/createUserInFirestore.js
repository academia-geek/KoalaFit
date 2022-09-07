import { db } from "../Firebase/firebaseConfig"
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { loginSync } from "../Redux/Actions/userActions";

export const createUserInFirestore = async (uid, data, dispatch) => {

    const userRef = collection(db, "users");
    const filtro = query(userRef, where(uid, "==", uid));
    const datos  = await getDocs(filtro)
    console.log(datos);

    // if (datos) {
    //     dispatch(loginSync(datos))
    //     console.log('Entra en datos');
    // } else {
    //     await setDoc(doc(db, 'users', uid), data)
    //     console.log('Entra en else');
    // }
    await setDoc(doc(db, 'users', uid), data)
}