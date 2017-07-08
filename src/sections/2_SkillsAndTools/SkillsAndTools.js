import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './SkillsAndTools.css';

import Skill from './components/Skill';

import macos from './images/macos.svg';
import pycharm from './images/pycharm.svg';
import zeplin from './images/zeplin.svg';
import sketch from './images/sketch.svg';
import bitbucket from './images/bitbucket.svg';
import gitlab from './images/gitlab.svg';
import slack from './images/slack.svg';
import toggl from './images/toggl.svg';

const tools = [macos, pycharm, zeplin, sketch, bitbucket, gitlab, slack, toggl];

class SkillsAndTools extends Component {
    render() {
        console.log(tools);

        const {reducers: {skills} } = this.props;

        return (
            <div className="skills-and-tools" id="SkillsAndTools">
                <h2 className="title">
                    Skills & Tools
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

                    <ul className="skills-and-tools__tools-list">
                        {tools.map( (tool) =>
                            <li className="skills-and-tools__tool">
                                <img className="skills-and-tools__tool-logo" src={tool} alt=""/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(SkillsAndTools);
