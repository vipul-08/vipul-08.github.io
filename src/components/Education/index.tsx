import React from "react";

const Education = ({institution, degree, major, isCGPA, marks, timeline}: any) => {
    return (
        <div className="timeline-card timeline-card-blue">
            <div className="timeline-card-title">{institution}</div>
            <div className="timeline-card-subtitle">{degree} {major === null ? "" : `&middot; ${major}`}</div>
            <div className="timeline-card-subtitle">{isCGPA ? `CGPA: ${marks}/10` : `Percentage: ${marks}%`}</div>
            <div className="timeline-card-time">{timeline}</div>
        </div>
    );
}

export default Education;