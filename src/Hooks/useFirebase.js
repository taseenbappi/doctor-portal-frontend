import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeAtuhentication from "../Pages/Login/Firebase/firebase.init";

initializeAtuhentication();
const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);

    //user register handler
    const registerHangler = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                history.replace("/")
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
    const registerSignInHangler = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || "/";
                history.replace(destination);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsloading(false));
    }
    //google login handler
    const googleLoginHandler = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setUser(user);
                setError('');

            }).catch((error) => {
                // Handle Errors here.
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
        googleLoginHandler,
        logOut,
        user,
        error,
        isLoading
    };

}
export default useFirebase;