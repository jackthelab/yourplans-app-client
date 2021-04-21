import React from 'react'
import logo from '../Resources/favicon-32x32.png'
import { useSelector } from 'react-redux';

// containers
import LoginButtons from '../containers/LoginButtons'

// components
import LogOutButton from './LogOutButton'

const NavBar = () => {

    const profileDetails = useSelector(state => state.profile)
    const accountType = useSelector(state => state.accountType)

    return (
        <>
            <nav style={{ backgroundColor: "#007965", color: "#f6f6f6", paddingBottom: ".5rem", paddingTop: ".5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="nav-item logo-text">YourPlans</h6>
                            <img src={logo} alt="your plan logo" width="32" height="24" className="nav-item d-inline-block align-text-top"/>
                        </div>
                        <div className="col-md-6">
                            {/* <ul className="nav">
                                <li className="nav-item nav-option">
                                    How?
                                </li>
                                <li className="nav-item nav-option">
                                    Where?
                                </li>
                                <li className="nav-item nav-option">
                                    About
                                </li>
                            </ul> */}
                            { !profileDetails ? null : null }
                            { profileDetails && profileDetails.first_name ? <h1 className="nav-item">{ `Welcome, ${ profileDetails.first_name }!` }</h1> : null }
                            { profileDetails && profileDetails.name ? <h1 className="nav-item">{ `Welcome, ${ profileDetails.name }!` }</h1> : null }
                            { profileDetails && profileDetails.message ? <h4 className="nav-item blink">Please Check Email and Password Are Correct</h4> : null }
                        </div>
                        <div className="col-md-3">
                            { profileDetails && !profileDetails.message ? <LogOutButton /> : <LoginButtons /> }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

