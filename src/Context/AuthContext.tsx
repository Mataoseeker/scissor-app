import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
            signInWithEmailAndPassword, 
                    signOut, 
                 onAuthStateChanged,
                 GoogleAuthProvider, signInWithPopup
    } from "firebase/auth";
import { auth } from "../Config/Firebase";


export const UserContext = createContext<any>(null);
// export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
   
//     signInWithPopup(auth, provider).then((result) => {
//         console.log(result)
//     })  

    
//   }


type value = any
type User = any



export const AuthContextProvider = ({ children }: any)  => {

     const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }


    const [user, setUser] = useState<value>({
                email: '',
                password: '',
                user: '',
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
        <UserContext.Provider value={{googleSignIn, createUser, user, logOut, signIn}}>
        {children}
        </UserContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(UserContext);
}



export default AuthContextProvider;