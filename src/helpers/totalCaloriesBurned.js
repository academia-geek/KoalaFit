import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/firebaseConfig"



export const caloriesBurned = async(state, id) => {
    const ref = doc(db, "History", id)
    const history = await getDoc(ref)
    let sumadorCalorias = 0
    history.data().auxHistory.map((doc)=>{
       sumadorCalorias += Number(doc.totalCalories)
    })
    state(sumadorCalorias)
}