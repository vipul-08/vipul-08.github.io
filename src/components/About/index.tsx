import React from 'react';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container about-container">
                <div className="row">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="about-card-group">
                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img style={{ verticalAlign: 'middle' }} src="assets/research.svg" /></div>
                                    </div>
                                    <div className="about-card-title">
                                        Software Engineer II
                                        <br />
                                        <b>Hashedin by Deloitte</b>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img src="assets/well.svg" /></div>
                                    </div>
                                    <div className="about-card-title">
                                        Studied at
                                        <br />
                                        <b>University of Mumbai</b>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img src="assets/code.svg" /></div>
                                    </div>
                                    <div className="about-card-title">
                                        Software Engineer
                                        <br />
                                        <b>Full Stack &middot; Java &middot; React</b>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img src="assets/mars.svg" /></div>
                                    </div>
                                    <div className="about-card-title">
                                        Interests
                                        <br />
                                        <b>Cricket &middot; Football</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col about-educationcol">
                        <div className="title">Education</div>
                        <div className="about-timeline">

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">University of Mumbai</div>
                                <div className="timeline-card-subtitle">BE &middot; Computer Science</div>
                                <div className="timeline-card-subtitle">CGPA: 7.9/10</div>
                                <div className="timeline-card-time">2019</div>
                            </div>

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">Kendriya Vidyalaya BHU Varanasi</div>
                                <div className="timeline-card-subtitle">Intermediate &middot; Science Stream</div>
                                <div className="timeline-card-subtitle">Percentage: 87%</div>
                                <div className="timeline-card-time">2015</div>
                            </div>

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">Kendriya Vidyalaya BHU Varanasi</div>
                                <div className="timeline-card-subtitle">High School</div>
                                <div className="timeline-card-subtitle">CGPA: 9.4/10</div>
                                <div className="timeline-card-time">2013</div>
                            </div>

                        </div>
                    </div>

                    <div className="col about-experiencecol">
                        <div className="title">Experience</div>
                        <div className="about-timeline">

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">Software Engineer II</div>
                                <div className="timeline-card-subtitle">Hashedin by Deloitte</div>
                                <div className="timeline-card-content">&middot; Point 1</div>
                                <div className="timeline-card-content">&middot; Point 2</div>
                                <div className="timeline-card-time">July 2021 - Present</div>
                            </div>

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">Web Application Developer</div>
                                <div className="timeline-card-subtitle">Media.net</div>
                                <div className="timeline-card-content">&middot; Point 1</div>
                                <div className="timeline-card-content">&middot; Point 2</div>
                                <div className="timeline-card-time">July 2019 - June 2021</div>
                            </div>

                            <div className="timeline-card timeline-card-blue">
                                <div className="timeline-card-title">Machine Learning Intern</div>
                                <div className="timeline-card-subtitle">Mobicule Technologies Pvt. Ltd.</div>
                                <div className="timeline-card-content">&middot; Point 1</div>
                                <div className="timeline-card-content">&middot; Point 2</div>
                                <div className="timeline-card-time">Dec 2018 - Jan 2019</div>
                            </div>

                        </div>
                    </div>

                    <div className="col about-skillcol">
                        <div className="title">Skills</div>
                        <div className="about-timeline">

                            <div className="skills-title">Languages</div>
                            <div className="skills-content">
                                <div className="skills-tile">Java</div>
                                <div className="skills-tile">JavaScript</div>
                                <div className="skills-tile">Python</div>
                                <div className="skills-tile">Go</div>
                                <div className="skills-tile">PHP</div>
                                <div className="skills-tile">Android</div>
                            </div>

                            <div className="skills-title">Technologies</div>
                            <div className="skills-content">
                                <div className="skills-tile">Git</div>
                                <div className="skills-tile">CI/CD</div>
                                <div className="skills-tile">Docker</div>
                                <div className="skills-tile">Jira</div>
                                <div className="skills-tile">Linux</div>
                                <div className="skills-tile">Node.js</div>
                                <div className="skills-tile">React</div>
                                <div className="skills-tile">Spring</div>
                                <div className="skills-tile">Laravel</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;