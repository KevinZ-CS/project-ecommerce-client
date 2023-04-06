import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function PrivateUserSignUpRoutes() {
    
const adminUser = useSelector((state) => state.users.adminUser)
const user = useSelector((state) => state.users.user )

return (       
    adminUser || user ? <Navigate to='/' /> : <Outlet/> 
    )
}

export default PrivateUserSignUpRoutes