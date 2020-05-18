import React from 'react';


import logo from '../images/log02.png';
import { Link } from 'react-router-dom';

import '../styles/navbar.css'


const Navbar = () =>{
    
        return(
         
            <React.Fragment>
                <ul className="nav justify-content-center header">

                    <li>
                        <img src={logo} className="header__img-logo" alt="logo"/>
                    </li>  

                    <li className="nav-link active">
                        <Link to="/First/Page"className="nav__link">Home</Link>
                    </li>

                    <li className="nav-link active">
                        <Link to="/Abautme" className="nav__link">Perfil</Link>
                    </li>

                    <li className="nav-link active">
                        <Link to="/Profile"className="nav__link">Proyectos</Link>
                    </li>

                </ul>
            </React.Fragment>
        
            
        )
    
}

export default Navbar;