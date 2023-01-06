import React from 'react';

const Experience = ({company,designation,timeline,pointers}: any) => {
    return (
        <div className="timeline-card timeline-card-blue">
            <div className="timeline-card-title">{designation}</div>
            <div className="timeline-card-subtitle">{company}</div>
            {pointers.map((pointer: string) => <div className="timeline-card-content">&middot; {pointer}</div>)}
            <div className="timeline-card-time">{timeline}</div>
        </div>
    );
}

export default Experience;