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
                   className="project-details-content"
                   overlayClassName="project-details-overlay"
            >
                <div>
                    {/*<img src={selectedProject.imageRect} alt="" className="project__img"/>*/}

                    <div className="project__info">
                        <h3 className="project__title">{selectedProject.title}</h3>


                        <p className="project__description">{selectedProject.description}</p>

                        <ul className="project__stack">
                            {selectedProject.stack.map( (technology) =>
                                <div className="project__technology" key={technology}>{technology}</div>
                            )}
                        </ul>
                    </div>

                    <button className="project-details__close-btn" onClick={onCloseProjectDetails}>
                        <FontAwesome className="project-details__close-icon" name='times'/>
                    </button>
                </div>
            </Modal>
        )
    }
};

export default ProjectDetails;
