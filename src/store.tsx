//From the AuthContext file

//  export const UserContext = createContext();

//  type value = {
//     email: string,
//     password: string
//     user: string,
//  }

// export const UserProvider = ({children}: any) => {
//     const [user, setUser] = useState<value>({
//         email: '',
//         password: '',
//         user: ''
//     });

//     const handleEmail = (e: any) => {
//         setUser({...user, email: e.target.value})
//     }

//     const handlePassword = (e: any) => {
//         setUser({...user, password: e.target.value})
//     }

//     const handleUser = (e: any) => {
//         setUser({...user, user: e.target.value})
//     }

//     return (
//         <UserContext.Provider value={{handleEmail, handlePassword, handleUser, user}}>
//             {children}
//         </UserContext.Provider>
//     )
// }



//From the SignupPage file
// e.preventDefault();

    // if(password !== retypePassword){
    //   alert("Password and Confirm password must be same")
    //   return
    // }
    // const { email, password } = e;





    // From the NavBar file
    
   // import { Link } from "react-router-dom"
// import Logo from "./Images/Logo.png"
// const NavBar = () => {
//     return ( 
//         <div className="flex ">
//          <Link to="/"> <img src= { Logo } alt="logo" className="mt-7 ml-40 w-20 "/> </Link>
        
//             <div className="mt-6 m-10">
//                 <Link to="/urls" className="m-5 text-blue-600 "> My URLs </Link>
//                 <Link to="/features" className="m-5"> Features </Link>
//                 <Link to="/pricing" className="m-5"> Pricing </Link>
//                 <Link to="/analytics" className="m-5"> Analytics </Link>
//                 <Link to="/faqs" className="m-5"> FAQs </Link>
//                 <Link to="/login" className="m-20 text-blue-700"> Login </Link>
//                 <Link to="/try" className="m-6 bg-blue-500 text-white py-3 px-4 
//                   border-none rounded-full hover:bg-white hover:border-blue-700 hover:text-black"> Try for free </Link>

//             </div>
//         </div>
//      );
// }
 
// export default NavBar