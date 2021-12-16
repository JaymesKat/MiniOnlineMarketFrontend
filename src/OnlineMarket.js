import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/shared/navbar/NavBar";
import AppRoutes from "./router/routes";
import {useContext, useEffect} from "react";
import {AuthContext} from "./context/AuthContext";

const OnlineMarket = () => {

    const [authState,setAuthState] = useContext(AuthContext);

    useEffect(() => {
        const userState = localStorage.getItem('identity');
        const user = JSON.parse(userState);
        if(user){
            setAuthState({ loggedIn: true, user});
        }
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRoutes/>
        </BrowserRouter>
    )
}

export default OnlineMarket;