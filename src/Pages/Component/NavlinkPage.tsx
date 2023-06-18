import { UserAuth } from "../../Context/AuthContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../Components/Images/Logo.png"
import { Link } from "react-router-dom"
const NavlinkPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu2 = () => {
      setMenuOpen(!isMenuOpen);
    };
  
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
            <nav className="flex flex-row bg-gray-800" >
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">

            <Link to="/dashboard"> <img src= { Logo } alt="logo"
             className="md:block hidden md:ml-10 w-20 "/> </Link>
            </div>
            <div className="hidden md:block">
              <div className="  flex items-baseline  space-x-4">
              <div className="mt-6 m-10">
              <Link to="/dashboard" className="m-4 text-white">Dashboard</Link>

            <Link to="/dashboard" className="m-4 text-white">Links</Link>

            <Link to="/qrcodegenerator" className="m-4 text-white">QR Codes</Link>

            <Link to="/dashboard" className="m-4 text-white">Custom Links</Link>

               
            <Link to="/urlshortener"> <button className="bg-blue-800
                 hover:bg-blue-700 text-white ml-10 mt-5 px-5 py-3 border-none 
                 rounded-lg">
                    Create new
            </button> </Link>
                   </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu2}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="  pb-3 space-y-1 sm:px-3">
        <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white
     block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>

        <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white
     block px-3 py-2 rounded-md text-base font-medium">Links</Link>

<Link to="/qrcodegenerator" className="text-gray-300 hover:bg-gray-700 hover:text-white
     block px-3 py-2 rounded-md text-base font-medium">QR Codes</Link>

<Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white
     block px-3 py-2 rounded-md text-base font-medium">Custom Links</Link>
     
<Link to="/urlshortener"> <button className="text-gray-300 hover:bg-gray-700 hover:text-white
     block px-3 py-2 border rounded-md text-base font-medium">
        Create new
</button> </Link>
        </div>
      </div>
    </nav>



    <div className="relative">
        <button
        className="inline-flex ml-24  items-center m-3 px-3 md:px-6 py-3 text-sm font-medium
         text-slate-700 md:ml-10 border rounded-lg bg-white hover:bg-slate-100 
         "
        onClick={toggleMenu}
      >
        {user?.displayName || user?.email || user?.username}
        <svg
          className="w-5 h-5 ml-2 -mr-1  transition-transform duration-200 transform"
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
        </div>
     );
}
 
export default NavlinkPage;