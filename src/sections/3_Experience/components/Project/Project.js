import React from 'react';
import './Project.css';

import FontAwesome from 'react-fontawesome';

const Project = ( {project: {id, imageRect, title}, onOpenProjectDetails} ) => {
    return (
        <div className="project" onClick={() => onOpenProjectDetails(id)}>
            <img src={imageRect} alt="" className="project__img"/>

            <div className="project__info">
                <h3 className="project__title">{title}</h3>

                <FontAwesome className='project__details-icon'
                             name='search'
                />
            </div>
        </div>
    )
};

export default Project;
