import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || {}
    }
    const [ user, dispatch ] = useReducer(authReducer, {}, init)

    useEffect(()=> {
        // Por cada vez que se loguee o desloguee el usuario se guarda el state en localStorage.
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    const data = {user,
                  dispatch,
                }

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider