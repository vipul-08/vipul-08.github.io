import React from 'react';
import laptopSvg from '../../assets/vipulVector.png'
import {RESUME_LINK,  GIT_LINK, LINKEDIN_LINK, TWITTER_LINK} from '../../constants'

const Home = () => {
    return (
        <div id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-profile">

                    <div className="hero-profile-img-wrapper">
                        <img alt="LaptopSvg" src={laptopSvg} className="hero-profile-img" />
                    </div>

                    <div className="hero-profile-content">
                        <div className="hero-headline">Vipul Singh Raghuvanshi</div>
                        <div className="hero-text">Senior Applications Enginner (IC3)</div>
                        <div className="hero-text">at Oracle</div>
                    </div>

                    <div className="hero-icons">
                        <a title="Github" href={GIT_LINK} target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-github"></i> </a>
                        <a title="Linkedin" href={LINKEDIN_LINK} target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a title="Twitter" href={TWITTER_LINK} target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a title="Resume" href={RESUME_LINK} target="_blank" className="icon-link" rel="noreferrer"><i className="fa fa-solid fa-book"></i></a>
                    </div>

                    <a className="arrow fa fa-arrow-down fa-3x" href="#about"></a>

                </div>
            </div>
        </div>
    )
}

export default Home;