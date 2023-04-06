import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function PrivateUserRoutes() {
    
const user = useSelector((state) => state.users.user )

return (       
    user ? <Outlet/> : <Navigate to='/signup' />
    )
}

export default PrivateUserRoutes