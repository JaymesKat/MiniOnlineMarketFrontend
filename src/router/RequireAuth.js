import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";


const RequireAuth = ({children})=> {
    const [authState, setAuthState] = useContext(AuthContext);

    if(!authState.loggedIn) {
        console.log("Should redirect")
        return <Navigate to="/login"/>
    }

    return children;
}

export default RequireAuth;