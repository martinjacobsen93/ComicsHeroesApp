import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {


    // aca creo toda la logica y planeacion de la app.

    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}