import React from 'react';
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
                            <a href="#" className="menu__link">Home</a>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'about'
                            ?
                            <span className="menu__link--active">About</span>
                            :
                            <a href="#" className="menu__link">About</a>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'skillsAndTools'
                            ?
                            <span className="menu__link--active">Skills & Tools</span>
                            :
                            <a href="#" className="menu__link">Skills & Tools</a>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'experience'
                            ?
                            <span className="menu__link--active">Experience</span>
                            :
                            <a href="#" className="menu__link">Experience</a>
                        }
                    </li>

                    <li className="menu__item">
                        {currentSection === 'contacts'
                            ?
                            <span className="menu__link--active">Contacts</span>
                            :
                            <a href="#" className="menu__link">Contacts</a>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;
