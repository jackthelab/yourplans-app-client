import React from 'react'
import logo from '../Resources/favicon-32x32.png'
import { useSelector } from 'react-redux';

import LoginButtons from '../containers/LoginButtons'
import LoggedInButtons from '../containers/LoggedInButtons'

const NavBar = () => {

    // const isLoggedIn = useSelector(state => state.loggedIn)

    return (
        <>
            <nav style={{ backgroundColor: "#007965", color: "#f6f6f6", paddingBottom: ".5rem", paddingTop: ".5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h6 className="logo-text">YourPlans</h6>
                            <img src={logo} alt="your plan logo" width="32" height="24" className="d-inline-block align-text-top"/>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav">
                                <li className="nav-item nav-option">
                                    How?
                                </li>
                                <li className="nav-item nav-option">
                                    Where?
                                </li>
                                <li className="nav-item nav-option">
                                    About
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            {/* { isLoggedIn ? <LoggedInButtons /> : <LoginButtons /> } */}
                            <LoginButtons />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

