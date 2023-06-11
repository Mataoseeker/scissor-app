import { UserAuth } from "../../Context/AuthContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../Components/Images/Logo.png"
import { Link } from "react-router-dom"
const NavlinkPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login")
        }
        catch (err) {
            console.log(err);
        }
    };

    return ( 
        <div>
            <nav className="flex flex-row" >
               <Link to="/dashboard"> <img src={ Logo } alt="logo" 
               className="mt-7 ml-20"/> </Link>

                <Link to="/dashboard" className="mt-8 text-lg ml-10   text-blue-800
            hover:text-blue-900">Dashboard</Link>

            <Link to="/dashboard" className="mt-8 text-lg ml-10    text-blue-800
            hover:text-blue-900">Links</Link>

            <Link to="/dashboard" className="mt-8 text-lg ml-10    text-blue-800
            hover:text-blue-900">QR Codes</Link>

            <Link to="/dashboard" className="mt-8 text-lg ml-10   text-blue-800
            hover:text-blue-900">Custom Links</Link>

            <Link to="/dashboard" className="mt-8 text-lg ml-10    text-blue-800
            hover:text-blue-900">Settings</Link>
               
            <Link to="/urlshortener"> <button className="bg-blue-800
                 hover:bg-blue-700 text-white ml-10 mt-5 px-5 py-3 border-none rounded-lg">
                    Create new
            </button> </Link>

        <div className="relative">
        <button
        className="inline-flex items-center mt-5 px-6 py-3 text-sm font-medium
         text-slate-700 ml-10 border rounded-lg bg-white hover:bg-slate-100 
         "
        onClick={toggleMenu}
      >
        {user && user.email}
        <svg
          className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
            <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3
             3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 space-y-2 w-80 h-80 py-2
        bg-white border rounded-md shadow-lg">
            <p className="ml-4 mt-4 block text-lg text-gray-700">{user.email}</p>
            <p className="ml-4 block text-gray-700">Free account</p>
            <hr />
          <a
            href="#"
            className="block px-4 py-2 text-lg text-gray-700
             hover:bg-indigo-100"
          >
            Support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-lg text-gray-700 hover:bg-indigo-100"
          >
            API Documentation
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-lg text-gray-700 hover:bg-indigo-100"
          >
            Scissor Terms
          </a>
          <hr />
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-lg text-gray-700
             hover:bg-slate-100 hover:w-full"
          >
            Sign Out
          </button>
        </div>
      )}
    </div> 
            </nav>

     <hr className="mt-4 font-extrabold"/>
        </div>
     );
}
 
export default NavlinkPage;