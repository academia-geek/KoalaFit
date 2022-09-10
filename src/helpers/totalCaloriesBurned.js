import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

const dt = new Date();
const fecha = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

export const caloriesBurned = async (state, id) => {
  const ref = doc(db, "History", id);
  const history = await getDoc(ref);
  let sumadorCalorias = 0;
  history.data().auxHistory.map((doc) => {
    if (fecha == doc.date) {
      sumadorCalorias += Number(doc.totalCalories);
    }
  });
  state(sumadorCalorias);
};

export const retosTiempo = async (state, state2, id) => {
  const ref = doc(db, "History", id);
  const history = await getDoc(ref);

  let totalRetos = 0;
  let totalTiempo = 0;
  history.data().auxHistory.map((doc) => {
    if (fecha == doc.date) {
      totalRetos++;
      totalTiempo += Number(doc.totalTime);
    }
  });
  state(totalRetos);
  state2(totalTiempo);
};
