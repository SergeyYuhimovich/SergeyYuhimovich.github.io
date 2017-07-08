import React from 'react';
import Scrollchor from 'react-scrollchor';
import './Menu.css';

const Menu = ( {currentSection} ) => {
    console.log(currentSection);

    return (
        <div className={currentSection === 'top' ? 'menu' : 'menu menu--onscroll'}>
            <div className="menu__background"/>

            <div className="content">
                <div className="menu__logo">
                    <span>SY</span>
                </div>

                <ul className="menu__list">
                    <li className="menu__item">
                        {currentSection === 'intro' || currentSection === 'top'
                            ?
                            <span className="menu__link--active">Home</span>
                            :
                            <Scrollchor to="" className="menu__link" animate={{duration: 600}}>Home</Scrollchor>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'about'
                            ?
                            <span className="menu__link--active">About Me</span>
                            :
                            <Scrollchor to="#AboutMe" className="menu__link" animate={{duration: 600}}>About Me</Scrollchor>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'skillsAndTools'
                            ?
                            <span className="menu__link--active">Skills & Tools</span>
                            :
                            <Scrollchor to="#SkillsAndTools" className="menu__link" animate={{duration: 600}}>Skills & Tools</Scrollchor>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'experience'
                            ?
                            <span className="menu__link--active">Experience</span>
                            :
                            <Scrollchor to="#Experience" className="menu__link" animate={{duration: 600}}>Experience</Scrollchor>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'contacts'
                            ?
                            <span className="menu__link--active">Contacts</span>
                            :
                            <Scrollchor to="#Contacts" className="menu__link" animate={{duration: 600}}>Contacts</Scrollchor>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;
