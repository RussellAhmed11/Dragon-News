
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from "../Components/Firebase/Firebase.configt";
import { createContext, useEffect, useState } from "react";
export const authContex = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    console.log(user)
    const createNewuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updatedUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        setUser,
        createNewuser,
        signOutUser,
        logInUser,
       updatedUserProfile
    }
    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            UnSubscribe()
        }
    }, [])
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;