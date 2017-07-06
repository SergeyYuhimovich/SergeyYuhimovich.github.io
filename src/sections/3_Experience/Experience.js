import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Experience.css';

import Project from './components/Project';

class Experience extends Component {
    render() {
        const {reducers: {projects}} = this.props;

        return (
            <div className="experience">
                <h2 className="title">Experience</h2>

                <div className="content">
                    <ul className="experience__projects-list">
                        {projects.map((project) =>
                            <li className="experience__projects-item" key={project.id}>
                                <Project title={project.title}
                                         description={project.description}
                                         stack={project.stack}
                                         image={project.image}
                                         url={project.url}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
};

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Experience);
