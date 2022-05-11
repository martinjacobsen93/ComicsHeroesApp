import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const handleLogout = () => {

        const logoutAction = {
            type: types.logout,
        }
        dispatch(logoutAction)

        navigate("/login", {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeclassname="active"
                        className={({isActive}) => ' nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeclassname="active"
                        className={({isActive}) => ' nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeclassname="active"
                        className={({isActive}) => ' nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='my-auto nav-item nav-link text-info'>Bienvenido!</span>
                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link"
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}