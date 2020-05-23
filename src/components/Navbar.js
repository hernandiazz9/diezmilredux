import React from 'react'
import {Link, NavLink} from 'react-router-dom'


import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {cerrarSesionAction} from '../redux/loginReducer'

const Navbar = (props) => {
    // leer state
    const logueado = useSelector(store => store.login.activo)
    const user = useSelector(store => store.login.user)
    
    const dispatch = useDispatch()

    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">10Mil</Link>
            <div>

                <div className="d-flex">
                    {logueado&&(

                        <NavLink 
                            className="btn btn-dark mr-2" 
                            to="/"
                            exact
                        >
                            Home
                        </NavLink>
                    )}
                    {
                        logueado? (
                            <NavLink 
                                className="btn btn-dark mr-2" 
                                to="/"
                                exact
                            >{ user&&user.name}</NavLink>
                        ):(
                            <div>

                            <NavLink 
                                className="btn btn-dark mr-2" 
                                to="/login"
                                exact
                            >
                                Login
                            </NavLink>
                            <NavLink 
                                className="btn btn-dark mr-2" 
                                to="/CrearCuenta"
                                exact
                            >
                                Registrarse
                            </NavLink>
                            </div>
                        )
                    }
                    
                    {logueado&&(
                        <button
                            className="btn btn-dark"
                            onClick={()=>dispatch(cerrarSesionAction())}
                        >
                            cerrar Sesión
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar