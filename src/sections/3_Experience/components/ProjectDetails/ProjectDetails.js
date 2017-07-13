import React from 'react';
import './ProjectDetails.css';

import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';

const ProjectDetails = ( {selectedProject, onCloseProjectDetails} ) => {
    if ( !selectedProject ) {
        return null;
    } else {
        console.log(selectedProject);

        return (
            <Modal isOpen={!!selectedProject}
                   contentLabel="Modal"
                   onRequestClose={onCloseProjectDetails}
                   className="project-details"
                   overlayClassName="project-details-overlay"
            >
                <div className="project-details__info">
                    <h3 className="project-details__title">{selectedProject.title}</h3>


                    <p className="project-details__description">{selectedProject.description}</p>

                    <ul className="project-details__stack">
                        {selectedProject.stack.map( (technology) =>
                            <div className="project-details__technology" key={technology}>{technology}</div>
                        )}
                    </ul>

                    {!selectedProject.in_development
                        ?
                        <a href={selectedProject.url} className="project-details__view-btn" target="_blank">View</a>
                        :
                        <span className="project-details__in-development-text">The project is under development</span>
                    }
                </div>

                <div className="project-details__img-wrapper">
                    <img src={selectedProject.image} alt="" className="project-details__img"/>
                </div>

                <button className="project-details__close-btn" onClick={onCloseProjectDetails}>
                    <FontAwesome className="project-details__close-icon" name='times'/>
                </button>
            </Modal>
        )
    }
};

export default ProjectDetails;
