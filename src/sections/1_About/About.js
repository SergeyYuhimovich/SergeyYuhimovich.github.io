import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about" id="About">
            <h2 className="title">About</h2>

            <div className="content">
                <img src="" alt=""/>

                <div className="about__col">
                    <p className="about__text">

                    </p>

                    <div className="about__buttons">
                        <a href="#" className="about__btn--cv">Download CV</a>

                        <a href="#" className="about__btn--contact">Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
