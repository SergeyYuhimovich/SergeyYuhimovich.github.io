import React from 'react';
import './Menu.css';

const Menu = ( {currentSection} ) => {
    console.log(currentSection);

    return (
        <div className={currentSection === 'top' ? 'menu' : 'menu menu--onscroll'}>
            <div className="content">
                <p className="menu__logo">SY</p>

                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className={currentSection === 'intro' || currentSection === 'top' ? 'menu__link--active' : 'menu__link'}>Home</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className={currentSection === 'about' ? 'menu__link--active' : 'menu__link'}>About</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className={currentSection === 'skillsAndTools' ? 'menu__link--active' : 'menu__link'}>Skills & Tools</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className={currentSection === 'experience' ? 'menu__link--active' : 'menu__link'}>Experience</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className={currentSection === 'contacts' ? 'menu__link--active' : 'menu__link'}>Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;
