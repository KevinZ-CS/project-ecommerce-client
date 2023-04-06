import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function PrivateAdminRoutes() {
    
const adminUser = useSelector((state) => state.users.adminUser)

return (       
    adminUser ? <Outlet/> : <Navigate to='/adminSignUp' />
    )
}

export default PrivateAdminRoutes