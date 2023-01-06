import React from 'react';
import Experience from '../Experience'
import Education from '../Education'
import researchAsset from '../../assets/research.svg'
import wellAsset from '../../assets/well.svg'
import codeAsset from '../../assets/code.svg'
import marsAsset from '../../assets/mars.svg'

import {EXPERIENCES, EDUCATIONS, LANGUAGES, TECHNOLOGIES, OPERATING_SYSTEMS} from '../../constants';

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
                                        <div className="about-card-icon"><img style={{ verticalAlign: 'middle' }} src={researchAsset} /></div>
                                    </div>
                                    <div className="about-card-title">
                                        {EXPERIENCES[0].designation}
                                        <br />
                                        <b>{EXPERIENCES[0].company}</b>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img src={wellAsset} /></div>
                                    </div>
                                    <div className="about-card-title">
                                        Studied at
                                        <br />
                                        <b>{EDUCATIONS[0].institution}</b>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card-icon-wrapper">
                                        <div className="about-card-icon"><img src={codeAsset} /></div>
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
                                        <div className="about-card-icon"><img src={marsAsset} /></div>
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
                            {EDUCATIONS.map((education) => <Education
                                institution={education.institution}
                                degree={education.degree}
                                major={education.major}
                                isCGPA={education.isCGPA}
                                marks={education.marks}
                                timeline={education.timeline}
                            />)}
                        </div>
                    </div>

                    <div className="col about-experiencecol">
                        <div className="title">Experience</div>
                        <div className="about-timeline">
                            {EXPERIENCES.map((experience: any) => <Experience
                                company={experience.company}
                                designation={experience.designation}
                                timeline={experience.timeline}
                                pointers={experience.pointers}
                            />)}
                        </div>
                    </div>

                    <div className="col about-skillcol">
                        <div className="title">Skills</div>
                        <div className="about-timeline">
                            <div className="skill-container">
                                <div className="skills-title">Languages</div>
                                <div className="skills-content">
                                    {LANGUAGES.map((language: any) => <div className="skills-tile">{language}</div>)}
                                </div>
                            </div>
                            
                            <div className="skill-container">
                                <div className="skills-title">Technologies</div>
                                <div className="skills-content">
                                    {TECHNOLOGIES.map((technology) => <div className="skills-tile">{technology}</div>)}
                                </div>
                            </div>

                            <div className="skill-container">
                                <div className="skills-title">Softwares and OS</div>
                                <div className="skills-content">
                                    {OPERATING_SYSTEMS.map((os) => <div className="skills-tile">{os}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;