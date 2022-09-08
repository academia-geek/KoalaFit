import {
    userTypes
  } from "../Types/userTypes";

  const initialState = {
    whg: {},
    water: '',
    calories: '',
    totalCal: 0
  }

  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case userTypes.login:
        return action.payload;

      case userTypes.register:
        return action.payload;

      case userTypes.addWHG:
        return {
          ...state,
          whg: {...state.whg,...action.payload}
        }
      case userTypes.addCalories:
        return {
          ...state,
          calories: {...state.calories,...action.payload}
        }
      case userTypes.addWater:
        return {
          ...state,
          water: {...state.water,...action.payload}
        }
      case userTypes.addEditInfoUser:
        return {
          displayName: action.payload.displayName,
          photoURL: action.payload.photoURL,
          age: action.payload.age,
          city: action.payload.city,
          uid: action.payload.uid
        }
      case userTypes.addHistoryOfCalories:
        return {
          ...state,
          totalCal: action.payload
        }

      case userTypes.currentUser:
        return action.payload  

      default:
        return state;
    }
  };