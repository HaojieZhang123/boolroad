import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/images/BooRoadLogoFinal.png'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-body-secondary">
                <div className="container">
                    <Link className='navbar-brand' to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header