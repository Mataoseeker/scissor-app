import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
            signInWithEmailAndPassword, 
                    signOut, 
                 onAuthStateChanged
    } from "firebase/auth";
import { auth } from "../Config/Firebase";

export const UserContext = createContext<any>(null);

type value = any
type User = any
export const AuthContextProvider = ({ children }: any)  => {
    const [user, setUser] = useState<value>({
                email: '',
                password: '',
                user: ''
            });
        
    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
   


    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
            setUser(currentUser)
        })
        return unsubscribe;

    }, [])
    
    return (
        <UserContext.Provider value={{createUser, user, logOut, signIn}}>
        {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
}