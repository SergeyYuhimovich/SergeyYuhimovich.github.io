import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <div className="content">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="menu__link">About</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className="menu__link">Skills & Tools</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className="menu__link">Experience</a>
                    </li>

                    <li className="menu__item">
                        <a href="#" className="menu__link">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;
