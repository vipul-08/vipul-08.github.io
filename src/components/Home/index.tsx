import React from 'react';
import laptopSvg from '../../assets/vipulVector.png'

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
                        <div className="hero-text">Software Engineer II</div>
                        <div className="hero-text">at Hashedin by Deloitte</div>
                    </div>

                    <div className="hero-icons">
                        <a title="Github" href="https://github.com/vipul-08" target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-github"></i> </a>
                        <a title="Linkedin" href="https://www.linkedin.com/in/vipul-08/" target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a title="Twitter" href="https://twitter.com/_VipulSingh_" target="_blank" className="icon-link" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a title="Resume" href="https://drive.google.com/file/d/1K1JjkFjx9OA1lrpR_66OL9ozpEb9Io2m/view?usp=sharing" target="_blank" className="icon-link" rel="noreferrer"><i className="fa fa-solid fa-book"></i></a>
                    </div>

                    <a className="arrow fa fa-arrow-down fa-3x" href="#about"></a>

                </div>
            </div>
        </div>
    )
}

export default Home;