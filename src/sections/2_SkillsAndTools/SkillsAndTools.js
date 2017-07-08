import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './SkillsAndTools.css';

import Skill from './components/Skill';

import bg2_9_16_640 from './images/bg2_9_16_640.png';
import bg2_9_16_700 from './images/bg2_9_16_700.png';
import bg2_9_16_775 from './images/bg2_9_16_775.png';
import bg2_9_16_810 from './images/bg2_9_16_810.png';

import bg2_4_3_771 from './images/bg2_4_3_771.png';
import bg2_4_3_970 from './images/bg2_4_3_970.png';
import bg2_4_3_1155 from './images/bg2_4_3_1155.png';
import bg2_4_3_1388 from './images/bg2_4_3_1388.png';

import bg2_16_9_596 from './images/bg2_16_9_596.png';
import bg2_16_9_820 from './images/bg2_16_9_820.png';
import bg2_16_9_1012 from './images/bg2_16_9_1012.png';
import bg2_16_9_1184 from './images/bg2_16_9_1184.png';
import bg2_16_9_1440 from './images/bg2_16_9_1440.png';

import bg2_1104 from './images/bg2_1104.png';
import bg2_1572 from './images/bg2_1572.png';
import bg2_2002 from './images/bg2_2002.png';
import bg2_2560 from './images/bg2_2560.png';

import macos from './images/macos.svg';
import pycharm from './images/pycharm.svg';
import zeplin from './images/zeplin.svg';
import sketch from './images/sketch.svg';
import bitbucket from './images/bitbucket.svg';
import gitlab from './images/gitlab.svg';
import slack from './images/slack.svg';
import toggl from './images/toggl.svg';

const tools = [
    {
        id: 1,
        icon: macos,
        title: 'macOS'
    },

    {
        id: 2,
        icon: pycharm,
        title: 'PyCharm'
    },

    {
        id: 3,
        icon: zeplin,
        title: 'Zeplin'
    },

    {
        id: 4,
        icon: sketch,
        title: 'Sketch'
    },

    {
        id: 5,
        icon: bitbucket,
        title: 'BitBucket'
    },

    {
        id: 6,
        icon: gitlab,
        title: 'GitLab'
    },

    {
        id: 7,
        icon: slack,
        title: 'Slack'
    },

    {
        id: 8,
        icon: toggl,
        title: 'Toggl'
    }
];

class SkillsAndTools extends Component {
    render() {
        const {reducers: {skills} } = this.props;

        return (
            <div className="skills-and-tools" id="SkillsAndTools">
                <picture className="skills-and-tools__bg">
                    <source media="(max-width: 767px)"
                            sizes="(max-width: 810px) 100vw, 810px"
                            srcSet={[
                                bg2_9_16_640, '640w,',
                                bg2_9_16_700, '700w,',
                                bg2_9_16_775, '775w,',
                                bg2_9_16_810, '810w'
                            ].join(' ')}
                    />

                    <source media="(min-width: 768px) and (max-width: 991px)"
                            sizes="(max-width: 1388px) 70vw, 1388px"
                            srcSet={[
                                bg2_4_3_771, '771w,',
                                bg2_4_3_970, '970w,',
                                bg2_4_3_1155, '1155w,',
                                bg2_4_3_1388, '1388w'
                            ].join(' ')}
                    />

                    <source media="(min-width: 992px) and (max-width: 1199px)"
                            sizes="(max-width: 2400px) 60vw, 1440px"
                            srcSet={[
                                bg2_16_9_596, '596w,',
                                bg2_16_9_820, '820w,',
                                bg2_16_9_1012, '1012w,',
                                bg2_16_9_1184, '1184w,',
                                bg2_16_9_1440, '1440w'
                            ].join(' ')}
                    />

                    <img sizes="(max-width: 6400px) 40vw, 2560px"
                         srcSet={[
                             bg2_1104, '1104w,',
                             bg2_1572, '1572w,',
                             bg2_2002, '2002w,',
                             bg2_2560, '2560w'
                         ].join(' ')}
                         src={bg2_2560}
                         alt=""
                    />
                </picture>

                <div className="skills-and-tools__tint" />


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
                            <li className="skills-and-tools__tool" key={tool.id}>
                                <img className="skills-and-tools__tool-logo" src={tool.icon} alt=""/>
                                <span className="skills-and-tools__tool-title">{tool.title}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(SkillsAndTools);
