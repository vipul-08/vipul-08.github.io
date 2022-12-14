import React from 'react';
import About from '../About';
import Footer from '../Footer';
import Home from '../Home';
import Nav from '../Nav';
import Projects from '../Projects';
import Awards from '../Awards';
import './style.scss';

const Main = () => {
    return (
        <>
            <div className="page-bg"></div>

                <div className="animation-wrapper">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
            <div className="page-wrapper"> 
                <Nav />
                <Home />
                <About />
                <Projects />
                <Awards />
                <Footer />
            </div>
        </>
    )
}

export default Main;