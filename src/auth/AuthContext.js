import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || {}
    }
    const [ user, dispatch ] = useReducer(authReducer, {}, init)

    useEffect(()=> {
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