import React from 'react';
import './Project.css';

import FontAwesome from 'react-fontawesome';

const Project = ( {title, description, stack, image, imageRect, url} ) => {
    return (
        <div className="project">
            <img src={imageRect} alt="" className="project__img"/>

            <div className="project__info">
                <h3 className="project__title">{title}</h3>

                <FontAwesome className='project__details-icon'
                             name='search'
                />


                {/*<p className="project__description">{description}</p>*/}

                {/* <ul className="project__stack"> */}
                {/*{stack.map((technology) => */}
                {/*<div className="project__technology" key={technology}>{technology}</div> */}
                {/* )} */}
                {/* </ul> */}
            </div>
        </div>
    )
};

export default Project;
