
import {getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged  } from "firebase/auth";

import {useEffect, useState} from 'react';
import InitializeFirebase from "./InitializeFirebase";

InitializeFirebase()

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);

    const signinGoogle = ()=>{
      setIsLoading(true)
      return  signInWithPopup(auth, provider)
      .finally(()=>setIsLoading(false))
          
    }

    const logOut = ()=>{
      setIsLoading(true)
        signOut(auth)
        .then(() => {
          setUser({})
          }).finally(()=>setIsLoading(false))
          
      }

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
           setUser(user)
           
          }
          else {
            setUser({})
          }
          setIsLoading(false)
        });
      },[])

    return {
        signinGoogle,
        user,
        logOut,
        isLoading
      }


};

export default useFirebase;