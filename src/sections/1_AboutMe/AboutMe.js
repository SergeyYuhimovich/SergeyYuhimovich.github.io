import React from 'react';
import './AboutMe.css';

import myPhoto from './images/my_photo.jpg';

const AboutMe = ( {aboutMe} ) => {
    return (
        <div className="about-me" id="AboutMe">
            <h2 className="title">About Me</h2>

            <div className="content">
                <img className="my-photo" src={myPhoto} alt=""/>

                <div className="about-me__col">
                    <div className="about-me__text">
                        {aboutMe.text.map((paragraph) =>
                            <p className="about-me__paragraph">{paragraph}</p>
                        )}
                    </div>

                    <div className="about-me__buttons">
                        <a href="#" className="about-me__btn--cv">Download CV</a>

                        <a href="#" className="about-me__btn--contact">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
