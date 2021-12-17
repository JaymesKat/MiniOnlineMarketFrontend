import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";
import AuthServices from "../services/authservice";


const RequireAuth = ({children, requiredRole})=> {
    const [authState,] = useContext(AuthContext);

    if(!authState.loggedIn) {
        return <Navigate to="/login"/>
    }

    if(!authState.user.roles.includes(requiredRole)){
        return <>You are not authorized to view this page</>
    } else {
        console.log("Role is available")
    }

    return children;
}

RequireAuth.defaultProps = {
    requiredRole: AuthServices.ROLE_BUYER
}

export default RequireAuth;