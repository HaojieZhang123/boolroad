import React from 'react'
import { Link } from 'react-router-dom'
// import logo from 'images/BoolRoadLogo-cropped.png'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container justify-content-center d-flex">
                    <Link className='navbar-brand' to='/'>
                        <img src="/images/BoolRoadLogo-cropped.png" alt="BoolRoad" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header