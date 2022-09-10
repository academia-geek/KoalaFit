import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/firebaseConfig"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getLongMonthName = (date) => {
    return monthNames[date.getMonth()];
}

export const retosPorFecha = async(state, id) =>{
    const ref = doc(db,'History', id)
    const historyRef = await getDoc(ref)
    let data = []
    let data2 = []
    let aux = 0
    historyRef.data().auxHistory.forEach(doc => {
        data.push((getLongMonthName(new Date(doc.date))))
    });
   
    
    monthNames.forEach(e => {
        aux = 0
        data.forEach(mes =>{
            if(e == mes ){
                aux++
            }
        })
        data2.push(aux)
    })
     state(data2)
}

