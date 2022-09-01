import {
    userTypes
  } from "../Types/userTypes";
  
  export const userReducer = (state = {}, action) => {
    switch (action.type) {
      case userTypes.login:
        return action.payload;
  
      case userTypes.register:
        return action.payload;
  
      default:
        return state;
    }
  };