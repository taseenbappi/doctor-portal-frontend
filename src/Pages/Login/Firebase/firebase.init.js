import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAtuhentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAtuhentication;