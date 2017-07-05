import React from 'react';
import './Skill.css';

const Skill = ( {title, value} ) => {
    return (
        <div className="skill">
            <div className="skill__row">
                <span className="skill__title">{title}</span>

                <span className="skill__value">{value}</span>
            </div>


            <div className="progressbar">
                <div className="progressbar__progress" style={{width: value}} />
            </div>
        </div>
    )
};

export default Skill;
