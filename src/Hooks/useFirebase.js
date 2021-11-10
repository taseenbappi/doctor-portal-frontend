import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeAtuhentication from "../Pages/Login/Firebase/firebase.init";

initializeAtuhentication();
const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    //user register handler
    const registerHangler = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(name, email, "POST");
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
                saveUser(user.displayName, user.email, "PUT");
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

    //save user info to mongodb
    const saveUser = (displayName, email, method) => {
        const userInfo = { displayName, email };
        fetch('https://infinite-shore-61650.herokuapp.com/user', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    //admin loader
    useEffect(() => {
        fetch(`https://infinite-shore-61650.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    //auth observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })

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
        isLoading,
        admin,
        token
    };

}
export default useFirebase;