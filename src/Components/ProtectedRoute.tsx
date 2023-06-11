import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children}: any) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute;