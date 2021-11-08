import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAtuhentication from "../Pages/Login/Firebase/firebase.init";

initializeAtuhentication();
const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);

    //user register handler
    const registerHangler = (email, password) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            }).finally(() => setIsloading(false));
    }
    // register login handler
    const registerSignInHangler = (email, password) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false));
    }

    //auth observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                // User is signed out
                // ...
                setUser({});
            }
            setIsloading(false)
        });
        return () => unsubscribe;
    }, [])

    //user Logout handler
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        }).finally(() => setIsloading(false));
    }

    return {
        registerHangler,
        registerSignInHangler,
        logOut,
        user,
        error,
        isLoading
    };

}
export default useFirebase;