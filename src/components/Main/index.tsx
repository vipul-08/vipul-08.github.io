import React from 'react';
import About from '../About';
import Footer from '../Footer';
import Home from '../Home';
import Nav from '../Nav';
import Projects from '../Projects';

const Main = () => {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Main;