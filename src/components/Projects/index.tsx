import React from "react";

const Projects = () => {
    return (
        <div id="projects" className="project">
            <div className="container project-container">
                <div className="row">
                    <div className="title">Projects</div>
                </div>
                <div className="row project-row">
                    <div className="col project-col">
                        <div className="project-card">
                            <div className="project-card-cover project-card-website"></div>
                            <div className="project-card-content">
                                <div className="project-card-title">Personal Website</div>
                            </div>
                            <a target="_blank" href="https://www.vipul-raghuvanshi.tk">
                                <div className="project-card-btn project-card-blackbutton">GitHub</div>
                            </a>
                        </div>
                    </div>
                    <div className="col project-col">
                        <div className="project-card">
                            <div className="project-card-cover project-card-website"></div>
                            <div className="project-card-content">
                                <div className="project-card-title">Personal Website</div>
                            </div>
                            <a target="_blank" href="https://www.vipul-raghuvanshi.tk">
                                <div className="project-card-btn project-card-blackbutton">GitHub</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;