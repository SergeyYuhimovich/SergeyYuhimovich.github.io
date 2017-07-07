import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './SkillsAndTools.css';

import Skill from './components/Skill';

class SkillsAndTools extends Component {
    render() {
        const {reducers: {skills} } = this.props;

        return (
            <div className="skills-and-tools" id="SkillsAndTools">
                <h2 className="title">
                    Skills and Tools
                </h2>

                <div className="content">
                    <ul className="skills-and-tools__skills-list">
                        {skills.map( (skill) =>
                            <li className="skills-and-tools__skills-item" key={skill.id}>
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

export default connect( ( {reducers} ) => ( {reducers} ), actions )(SkillsAndTools);
