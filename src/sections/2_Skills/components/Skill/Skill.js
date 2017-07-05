import React from 'react';
import './Skill.css';

const Skill = ( {title, value} ) => {
    return (
        <div className="skill">
            <span>{title}</span>

            <div className="progressbar">
                <div className="progressbar__progress" style={{width: value}} />
            </div>
        </div>
    )
};

export default Skill;
