import React from 'react';

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="nav-item"><a className="nav-item-link" href="#hero">Home</a></div>
                <div className="nav-item"><a className="nav-item-link" href="#about">About</a></div>
                <div className="nav-item"><a className="nav-item-link" href="#projects">Projects</a></div>
                <div className="nav-item"><a className="nav-item-link" href="#awards">Awards</a></div>
            </div>
        </div>
    )
}

export default Nav;