import { UserAuth } from "../Context/AuthContext";
import line from "./Images/line.png"
import or from "./Images/or.png"
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
    email: string,
    password: string,
  };


const LoginPage = () => {

const { signIn } = UserAuth()

const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async () => {

  
    try {
      await signIn(email, password);
      navigate("/dashboard")
    }
    catch (err) {
      console.log(err);
      alert(`User not found`)
      navigate("/signup")
    }
   
  };


    return ( 
        <div className="login-page">
            <Header />
            
        <div className="md:mt-8 mt-5 md:ml-40 ml-24">
          <h2 className="font-serif text-2xl md:mt-20 mt-10 md:ml-96">Login In with: </h2>
            <button type="submit" className="bg-blue-950 text-white py-3 px-4
            border rounded-lg md:ml-96 mt-5 hover:bg-white hover:border-blue-700
             hover:text-black">Google</button>

            <button type="submit" className="bg-blue-950 text-white py-3 px-5
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
       onChange={ (e) => {
  
        setEmail(e.target.value)}}
       className="mt-8 md:w-full md:max-w-md max-w-sm 
       md:ml-10 px-16 md:px-7 py-3 border
       border-blue-700 rounded-xl text-blue-600 text-sm"/> 

      <p className="md:ml-60 text-center text-xs md:text-sm text-red-500">

        {errors.email?.type === "required" && "Email is required"}</p>
      
      <div className="flex row">
      <input 
      type={passwordVisible ? 'text' : 'password'}
      value={password}
      onChange={handleChangePassword}
      placeholder="Password"  className="md:mt-8 mt-4 md:w-full md:max-w-md max-w-sm 
       md:ml-10 px-16 md:px-7 py-3 border
      border-blue-700 rounded-xl text-blue-600 text-sm "

      /> 
       {passwordVisible ? 
      <svg fill="none" className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 " stroke="currentColor" stroke-width="1.5"
       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
         onClick={handleTogglePassword}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
        </svg>
    :
     
      <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
       className="md:w-6 w-5 md:h-6 h-5 cursor-pointer
       text-blue-700 md:mt-11 mt-7 md:-ml-10 -ml-8 " 
       onClick={handleTogglePassword}>
      <path stroke-linecap="round" stroke-linejoin="round"
       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007
        9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9
        .963-7.178z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
      </path>
       </svg>
}
</div>
     <p role="alert">{errors.password?.type === "required" && "Password is required"}</p>
     
     <Link to="/signup" 
     className="md:text-center md:ml-60 ml-20 text-xs text-blue-600 mt-5" >
      Forgot your password?</Link> <br />

      <button className="mt-2 md:w-full md:max-w-md cursor-pointer
      md:ml-10 px-32 md:px-7 py-3 border text-white
       bg-blue-700 rounded-lg md:rounded-full"> Log In</button>

     
    </form>
    
    </div>

        <p className="text-center md:text-lg text-sm m-3">Don't have an account? 
           <Link to="/signup" className="text-blue-700 md:text-lg text-base">Sign up</Link>
        </p>

        <p className="text-center m-4 md:text-base text-sm text-slate-600">
          By signing in with  an account, 
        you agree to <br />
      Scissor's <b>Terms of Service</b>, <b>Privacy Policy</b> and
       <b> Acceptable Use Policy</b>.
        </p>
        </div>
     );
}
 
export default LoginPage;