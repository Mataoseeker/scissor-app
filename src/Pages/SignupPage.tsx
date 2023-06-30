import NavBar from "../Components/NavBar";
import line from "./Images/line.png"
import or from "./Images/or.png"
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";

type Inputs = {
    username: string,
    email: string,
    password: string,
    retypePassword: string,
    preventDefault: any,
  };

const SignupPage = () => {

const { createUser, googleSignIn, user } = UserAuth()

const navigate = useNavigate();

const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch {
      console.log("Something went wrong")
    }
  }

  useEffect(() => {
    if(user != null) {
      navigate("/dashboard")
    }
  }, [user])

const [email, setEmail] = useState('')
const [passwordVisible, setPasswordVisible] = useState(false);
const [retypePasswordVisible, setRetypePasswordVisible] = useState(false)
const [password, setPassword] = useState('');
const [retypePassword, setRetypePassword] = useState('')

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleRetypePassword = () => {
    setRetypePasswordVisible(!retypePasswordVisible)
  }

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
    
  };

  const handleChangePassword2 = (event: any) => {
    setRetypePassword(event.target.value);
  }


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async () => {
    
    try {
      await createUser(email, password);
      navigate("/login")
    }
    catch (err) {
      alert("user already exist");
      //use toastify for the alert
    }
  };


    return ( 
        <div>
            <NavBar />
        <div>
        <div className="md:mt-5 mt-3 md:ml-40 ml-24">
        <h2 className="font-serif text-2xl md:mt-20 mt-10 md:ml-96">Sign Up with: </h2>
            <button type="submit" className="bg-blue-600 text-white py-3 px-4
            border rounded-lg md:ml-96  hover:bg-white hover:border-blue-700
             hover:text-black" onClick={handleGoogleSignIn}>Google</button>

            <button type="submit" className="bg-blue-600 text-white py-3 px-5
            border rounded-lg m-2 hover:bg-white hover:border-blue-700
             hover:text-black">Apple</button>
        </div>

        <div className="flex row md:ml-96 ml-3 mt-8">
            <img src={line} alt="line" className=" md:m-5 m-2 w-36 md:w-44"/>
            <img src={or} alt="or" className="md:m-5 m-2"/>
            <img src={line} alt="line" className="md:m-5 m-2 w-36 md:w-44"/>
            </div>

    <div className="md:ml-96 ml-10">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email address"
       {...register("email", { required: true })} 
       onChange={ (e) => setEmail(e.target.value)}
       className="mt-8 md:w-full md:max-w-md max-w-sm 
       md:ml-10  px-16 md:px-7 py-3 border
       border-blue-700 rounded-xl text-blue-600 text-sm"/> 

      <p className="md:ml-60 text-center text-xs md:text-sm text-red-500">

        {errors.email?.type === "required" && "Email is required"}</p>
      
      <div className="flex row">
      <input 
      type={passwordVisible ? 'text' : 'password'}
      {...register('password', {
        required: 'Password is required',
      })}
      value={password}
      onChange={handleChangePassword}
      placeholder="Password"  className="md:mt-8 mt-4 md:w-full md:max-w-md max-w-sm 
      md:ml-10  px-16 md:px-7 py-3 border
      border-blue-700 rounded-xl text-blue-600 text-sm "

      /> 
       {passwordVisible ? 

      <svg fill="none"  stroke="currentColor" strokeWidth="1.5" 
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
      className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 " 
       onClick={handleTogglePassword}>

      <path strokeLinecap="round" strokeLinejoin="round"
       d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338
        7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 
        6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065
         7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228
          3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 
          0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>

        </svg>
    :
     
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
       className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 " 
       onClick={handleTogglePassword}>
      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 
      7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07
      .207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.
      5c-4.638 0-8.573-3.007-9.963-7.178z"></path>

      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
       </svg>
}

           
     </div>
    

     <div className="flex row">

     <input 
      type={retypePasswordVisible ? 'text' : 'password' }
      {...register('retypePassword', {
        required: 'Confirm your password',
        validate: (value) =>
          value === password || 'Passwords do not match',
      })}
      value={retypePassword}
      onChange={handleChangePassword2}
      placeholder="Retype Password"   className="md:mt-8 mt-4 md:w-full
       md:max-w-md max-w-sm 
      md:ml-10 px-16 md:px-7 py-3 border
      border-blue-700 rounded-xl text-blue-600 text-sm "


      /> 
       {retypePasswordVisible ? 
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
       className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 " 
       onClick={handleToggleRetypePassword}>

      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 
      7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 
      6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 
      7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228
       3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 
       0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
        </svg>
    :
     
      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
      className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 "
      onClick={handleToggleRetypePassword}>

      <path strokeLinecap="round" strokeLinejoin="round"
       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 
       7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.
       207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4
       .638 0-8.573-3.007-9.963-7.178z"></path>

      <path strokeLinecap="round" strokeLinejoin="round" 
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
       </svg>
}
</div>
        {errors.retypePassword && <p className="ml-60 text-red-500">
          {errors.retypePassword.message}</p>}
     
     <h4 className="md:text-sm text-xs md:ml-12 mt-4" >
      6 or more characters, one number,
     one uppercase & one lower case.</h4> 
     <br />
      <button type="submit"
      className="md:mt-2 md:w-full md:max-w-md cursor-pointer
      md:ml-10 px-20 md:px-7 py-3 border text-white hover:bg-white hover:border-blue-700
        hover:text-black text-sm
       bg-blue-700 rounded-lg md:rounded-full">Sign Up with Email</button>

     
    </form>
    
    </div>
        <p className="text-center m-2">Already have an account?  
        <Link to="/login" className="text-blue-600 text-lg"> Sign In</Link></p>
        <p className="text-center m-3">By signing up, you agree to <br />
      Scissor's <b>Terms of Service</b>, <b>Privacy Policy</b> and <b>Acceptable Use Policy</b>.
        </p>
        </div>
        </div>
     );
}
 
export default SignupPage;