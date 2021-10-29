import firebaseConfig from "./Firebase.congig";
import { initializeApp } from "firebase/app";

const InitializeFirebase = ()=>{
    initializeApp(firebaseConfig);
}

export default InitializeFirebase;