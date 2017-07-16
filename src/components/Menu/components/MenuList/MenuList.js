import React from 'react';
import Scrollchor from 'react-scrollchor';
import Modal from 'react-modal';
import './MenuList.css';

const MenuList = ( {currentSection, mobile} ) => {
    return (
        <ul className={['menu-list', mobile && '--mobile'].join('')}>
            <li className="menu-list__item">
                {currentSection === 'intro' || currentSection === 'top'
                    ?
                    <span className="menu-list__link--active">Home</span>
                    :
                    <Scrollchor to="" className="menu-list__link" animate={{duration: 600}}>Home</Scrollchor>
                }
            </li>

            <li className="menu-list__item">
                {currentSection === 'about'
                    ?
                    <span className="menu-list__link--active">About Me</span>
                    :
                    <Scrollchor to="#AboutMe" className="menu-list__link" animate={{duration: 600}}>About Me</Scrollchor>
                }
            </li>

            <li className="menu-list__item">
                {currentSection === 'skillsAndTools'
                    ?
                    <span className="menu-list__link--active">Skills & Tools</span>
                    :
                    <Scrollchor to="#SkillsAndTools" className="menu-list__link" animate={{duration: 600}}>Skills & Tools</Scrollchor>
                }
            </li>

            <li className="menu-list__item">
                {currentSection === 'experience'
                    ?
                    <span className="menu-list__link--active">Experience</span>
                    :
                    <Scrollchor to="#Experience" className="menu-list__link" animate={{duration: 600}}>Experience</Scrollchor>
                }
            </li>

            <li className="menu-list__item">
                {currentSection === 'contacts'
                    ?
                    <span className="menu-list__link--active">Contacts</span>
                    :
                    <Scrollchor to="#Contacts" className="menu-list__link" animate={{duration: 600}}>Contacts</Scrollchor>
                }
            </li>
        </ul>
    )
};

export default MenuList;