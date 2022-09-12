import {
    userTypes
  } from "../Types/userTypes";
  import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    FacebookAuthProvider,
    getAdditionalUserInfo,
  } from "firebase/auth";
  import {
    facebook,
    google
  } from "../../Firebase/firebaseConfig";
import { createUserInFirestore } from "../../helpers/createUserInFirestore";

 export const loginSync = (user) => ({
    type: userTypes.login,
    payload: user,
  });

  export const registerWithEmail = (email, password, displayName,goal,height,totalCalories,water,weight) => {
    return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password, displayName,goal,height,totalCalories,water,weight)
        .then(async({user:{
            email,
            uid
        }}) => {
          const aux = await updateProfile(auth.currentUser, {
            displayName
          });
          const userData = {displayName, email, uid,goal,height,totalCalories,water,weight }
          console.log(userData);
          createUserInFirestore(uid,userData, dispatch)
          dispatch(
            registerSync({
              email,
              password,
              displayName,
              uid: auth.currentUser.uid,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    };
  };

  const registerSync = (user) => {
    return {
      type: userTypes.register,
      payload: user,
    };
  };

  export const LoginWithEmail = (email, password) => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({
            user: {
              displayName,
              email
            }
          }) =>
          dispatch(
            loginSync({
              displayName,
              email,
              password,
            })
          )
        )
        .catch(() => console.log("Usuario o contraseña invalida"));
    };
  };



  export const loginGoogle = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
        .then(({
            user: {
              displayName,
              email,
              photoURL,
              uid
            }
          }) =>{
            const userData = {displayName, email, photoURL, uid}
            createUserInFirestore(uid,userData, dispatch)
            dispatch(loginProvider(displayName, email, photoURL, uid))
            
          }
        )
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
        
    };
  };

  export const currentUser = (data) =>{
    return {
      type:userTypes.currentUser,
      payload: {
        data
      }
    }
  }

  export const loginProvider = (displayName, email, photoURL, uid) => {
    return {
      type: userTypes.login,
      payload: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  };

  export const loginFacebook = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
        .then(({
            user: {
              displayName,
              email,
              photoURL,
              uid
            }
          }) =>
          {
            const userData = {displayName, email, photoURL, uid}
            createUserInFirestore(uid,userData, dispatch)
            dispatch(loginProvider(displayName, email, photoURL, uid))
          }
        )
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
  
          // ...
        });
    };
  };

  export const addWHG = (WHG) => {
    return {
      type: userTypes.addWHG,
      payload: WHG
    }
  }
  export const addWater = (water) => {
    return {
      type: userTypes.addWater,
      payload: water
    }
  }
  export const addCalories = (cal) => {
    return {
      type: userTypes.addCalories,
      payload: cal
    }
  }
  export const addEditInfoUser = (data) => {
    return {
      type: userTypes.addEditInfoUser,
      payload: data
    }
  }
  export const addHistoryOfCalories = (data) => {
    return {
      type: userTypes.addHistoryOfCalories,
      payload: data
    }
  }