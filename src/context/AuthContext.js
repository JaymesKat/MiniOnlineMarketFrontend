import { createContext, useState } from "react";

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = (props) => {
    const [authState, setAuthState] = useState({
        loggedIn: false,
        user: null
    });
    return (
        <AuthContext.Provider value={[authState, setAuthState]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };