import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Experience.css';

import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

class Experience extends Component {
    render() {
        const {reducers: { projects, selectedProject }, onOpenProjectDetails, onCloseProjectDetails } = this.props;

        return (
            <div className="experience" id="Experience">
                <h2 className="title">Experience</h2>

                <div className="content">
                    <ul className="experience__projects-list">
                        {projects.map((project) =>
                            <li className="experience__projects-item" key={project.id}>
                                <Project project={project}
                                         onOpenProjectDetails={onOpenProjectDetails}
                                />
                            </li>
                        )}
                    </ul>
                </div>

                <ProjectDetails selectedProject={selectedProject}
                                onCloseProjectDetails={onCloseProjectDetails}
                />
            </div>
        )
    }
};

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Experience);
