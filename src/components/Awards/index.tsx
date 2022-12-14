import React from "react";

const Awards = () => {
    return (
        <div id="awards" className="awards">
            <div className="container award-container">
                <div className="row">
                    <div className="title">Awards and Recognitions</div>
                </div>
                <div className="row award-row">
                    <div className="col award-col">
                        <div className="award-card">
                            <div className="award-card-cover award-card-sih"></div>
                            <div className="award-card-content">
                                <div className="award-card-title">SIH Hardware Finalists</div>
                            </div>
                            <div className="award-card-btn award-card-blackbutton">View Image</div>
                        </div>
                    </div>
                
                    <div className="col award-col">
                        <div className="award-card">
                            <div className="award-card-cover award-card-endowment"></div>
                            <div className="award-card-content">
                                <div className="award-card-title">Most Deserving Student</div>
                            </div>
                            <div className="award-card-btn award-card-blackbutton">View Image</div>
                        </div>
                    </div>
                
                    <div className="col award-col">
                        <div className="award-card">
                            <div className="award-card-cover award-card-ideathon"></div>
                            <div className="award-card-content">
                                <div className="award-card-title">Ideathon Runners Up</div>
                            </div>
                            <div className="award-card-btn award-card-blackbutton">View Image</div>
                        </div>
                    </div>
                
                    <div className="col award-col">
                        <div className="award-card">
                            <div className="award-card-cover award-card-spot"></div>
                            <div className="award-card-content">
                                <div className="award-card-title">Spot Award @Deloitte</div>
                            </div>
                            <div className="award-card-btn award-card-blackbutton">View Image</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;