import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import stripe from "./Images/stripe.png"
import box from "./Images/box.png"
import ellipse from "./Images/ellipse.png"
import desktop from "./Images/desktop.png"
import basic from "./Images/basic.png"
import professional from "./Images/professional.png"
import teams from "./Images/teams.png"
import Button from "./Images/Button.png"
const HomePage = () => {
    return ( 
        <div>
            <NavBar />
            <div>
                <p className="text-center font-serif md:text-5xl text-3xl m-4 mt-10">
                    Optimize Your Online Experience with Our <br />
                    Advanced <span className="text-blue-500"> URL Shortening </span> 
                     Solution.</p>
                <img src={stripe} alt="stripe" 
                className=" m-auto " />

                <div>
                <p className="text-center font-serif md:text-lg text-sm mt-5 m-10">Personalize your shortened URLs 
                to align with your brand identity. Utilize custom <br />slugs, branded
                 links, and domain customization options to reinforce your brand <br /> 
                 presence and enhance user engagement.</p> 

                <div className=" mt-10 md:ml-96 ml-7">

                <Link to="/signup" className="m-10 md:ml-20 font-serif bg-blue-600 text-white
                 md:py-3 py-2 px-5 border border-none rounded-full"> Sign Up </Link>

                <Link to="/learnmore" className="md:m-10 m-7 font-serif text-blue-500">
                     Learn More 
                </Link>
                </div>
                  
                  <div className="mt-20">

                  <div className="m-5">
                  <img src={box} alt="box" className="m-auto" />
                  <img src={ellipse} alt="ellipse" className="m-auto" />
                  </div>

                  <div className="mt-10">
                  <img src={desktop} alt="desktop" className="desktop" />
                  </div>
                
        <div>
            <p className="text-center font-serif md:text-5xl text-3xl">A <span className="text-blue-600">
                        price perfect</span> for your needs.</p>

            <p className="text-center font-serif md:text-lg text-sm mt-3 m-10">From catering for your personal,
                     business, event, socials needs, you can be <br /> rest assured we have 
                     you in mind in our pricing.</p>
                </div>

                <div className="flex md:flex-row flex-col m-10 md:mt-20 mt-10 md:ml-44">
                  <img src={basic} alt="basic" className=" md:h-96 md:w-72 " />
                  <img src={professional} alt="professional" className=" md:h-96 md:w-72  " />
                  <img src={teams} alt="teams" className=" md:h-96 md:w-72 " />
                </div>

                <div className="mt-10 ml-4 md:ml-96">
                <Link to="/custom" className="md:m-10 text-blue-600 border
                 border-blue-600 py-3 px-5 rounded-full"> Get Custom pricing </Link>

                <Link to="/select" className=" m-4 bg-blue-600 text-white
                 py-3 px-5 border border-none rounded-full"> Select Pricing </Link> 
                </div>

                <div className="mt-8 ">
                
                    <div className="mt-8">
                        <form className="">
                            <div className="m-10">
                            <input type="text" placeholder="Paste URL here..." 
                            className="mt-20 w-full max-w-md md:ml-96  px-7 py-3 border
                             border-blue-700 rounded-xl text-blue-600
                            "/>
<div className="md:mt-8 mt-3">

<select placeholder="Customize domain"
    className="md:ml-96 py-3 md:m-3 m-1 md:px-7  px-16 border text-blue-600
     border-blue-700 rounded-xl  " >
        
         <option value="">Customize domain</option>
        <option value="">Scissors</option>
        <option value="">Bitly</option>
</select>

    <input type="text" placeholder="Type Alias here"
        className="py-3 border md:px-7 px-14 text-blue-600 border-blue-700 rounded-xl"/>
</div>
    <Link to="/login"> <img src={Button} alt="button"
     className="md:ml-96 w-full max-w-md mt-5 " /> </Link> 

     <p className="text-center mt-10">By clicking TrimURL, I agree to the 
        <b> Terms of Service</b>, <b>Privacy Policy</b> and Use of Cookies.</p> 
        </div>
    </form>
                    </div>
                </div>
                  </div>
                </div>  
                
            </div>
        </div>
            
     );
}
 
export default HomePage;