import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { Dispatch } from "redux";
import { auth } from "../firebase";
// import { auth } from "../firebase";
import { AuthAction, AuthActionTypes } from "../types/types";

export const getAuth = async () => {
    // return async
}
const googleProvider = new GoogleAuthProvider();

export const authWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }; 


  export const checkUser = () => {
    onAuthStateChanged(auth, (user)=> {
      return async (dispatch:Dispatch<AuthAction>) => {
        try {
          dispatch({type:AuthActionTypes.CHECK_USER, payload: user})
        }catch(error){
            console.log(error);
        }
      }
    })
  }
  
 export const logout = async () => {
      try {
          await signOut(auth)
      } catch (error) {
          console.log(error);
          
      }
  }

//   useEffect(()=> {
//       checkUser()
//   },[])