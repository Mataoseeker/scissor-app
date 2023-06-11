
import NavlinkPage from "./Component/NavlinkPage";
import desktop from "../Pages/Images/desktop.png"
const Dashboard = () => {

        
    return ( 
        <div >
            <NavlinkPage />
            <div className="md:mt-20 mt-5"> 
                <img src={desktop} alt="desktop analysis" className="md:w-full w-full" />
            </div>
        </div>
     );
}
 
export default Dashboard;

