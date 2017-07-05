import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Skills.css';

import Skill from './components/Skill';

class Skills extends Component {
    render() {
        const {reducers: {skills} } = this.props;

        return (
            <div className="skills">
                <h2 className="title">
                    Skills
                </h2>

                <div className="content">
                    <ul className="skills__list">
                        {skills.map( (skill) =>
                            <li className="skills__item" key={skill.id}>
                                <Skill title={skill.title}
                                       value={skill.value}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Skills);
