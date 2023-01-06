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
                            <a target="_blank" href="https://www.github.com/vipul-08/vipul-08.github.io">
                                <div className="project-card-btn project-card-blackbutton">GitHub</div>
                            </a>
                        </div>
                    </div>
                    <div className="col project-col">
                        <div className="project-card">
                            <div className="project-card-cover project-card-automation"></div>
                            <div className="project-card-content">
                                <div className="project-card-title">Home Automation</div>
                            </div>
                            <a target="_blank" href="https://www.github.com/vipul-08/HomeAutomation">
                                <div className="project-card-btn project-card-blackbutton">GitHub</div>
                            </a>
                        </div>
                    </div>
                    <div className="col project-col">
                        <div className="project-card">
                            <div className="project-card-cover project-card-kagglist"></div>
                            <div className="project-card-content">
                                <div className="project-card-title">Kagglist</div>
                            </div>
                            <a target="_blank" href="https://bit.ly/kagglist-app">
                                <div className="project-card-btn project-card-blackbutton">Store</div>
                            </a>
                        </div>
                    </div>
                    <div className="col project-col">
                        <div className="project-card">
                            <div className="project-card-cover project-card-mychat"></div>
                            <div className="project-card-content">
                                <div className="project-card-title">MyChat</div>
                            </div>
                            <a target="_blank" href="https://www.github.com/a7r3/MyChat">
                                <div className="project-card-btn project-card-blackbutton">Github</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;