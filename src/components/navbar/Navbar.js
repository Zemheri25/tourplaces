import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className='bg-dark'>
                <ul className="nav justify-content-center">
                    <li className="nav-item py-3">
                        <a className="nav-link active " aria-current="page" href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item py-3">
                        <a className="nav-link " href="#">FOR YOU</a>
                    </li>
                    <li className="nav-item py-3">
                        <a className="nav-link" href="#">SERVICES</a>
                    </li>
                    <li className="nav-item py-3">
                        <a className="nav-link " href="#">BLOG</a>
                    </li>
                    <li className="nav-item py-3">
                        <a className="nav-link" href="#">VLOG</a>
                    </li>
                    <li className="nav-item py-3">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar