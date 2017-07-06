import React from 'react';
import './Project.css';

const Project = ( {title, description, stack, image, url} ) => {
    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
            <ul className="project__stack">
                {stack.map((technology) =>
                    <div className="project__technology" key={technology}>{technology}</div>
                )}
            </ul>
        </div>
    )
};

export default Project;
