import React from 'react';
import './Intro.css';

import bg_9_16_320 from './images/bg_9_16_w_320.jpg';
import bg_9_16_1050 from './images/bg_9_16_w_1050.jpg';
import bg_9_16_1534 from './images/bg_9_16_w_1534.jpg';

import bg_4_3_538 from './images/bg_4_3_w_538.jpg';
import bg_4_3_1025 from './images/bg_4_3_w_1025.jpg';
import bg_4_3_1388 from './images/bg_4_3_w_1388.jpg';

import bg_16_9_596 from './images/bg_16_9_w_596.jpg';
import bg_16_9_1075 from './images/bg_16_9_w_1075.jpg';
import bg_16_9_1440 from './images/bg_16_9_w_1440.jpg';

import bg_21_9_480 from './images/bg_21_9_w_480.jpg';
import bg_21_9_2562 from './images/bg_21_9_w_2562.jpg';
import bg_21_9_3840 from './images/bg_21_9_w_3840.jpg';

const Intro = () => {
    return (
        <div className="intro">
            <picture className="intro__bg">
                <source media="(max-width: 767px)"
                        sizes="(max-width: 1534px) 100vw, 1534px"
                        srcSet={[bg_9_16_320, '320w,', bg_9_16_1050, '1050w,', bg_9_16_1534, '1534w'].join(' ')}
                />
                <source media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 1983px) 70vw, 1388px"
                        srcSet={[bg_4_3_538, '538w,', bg_4_3_1025, '1025w,', bg_4_3_1388, '1388w'].join(' ')}
                />
                <source media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 2400px) 60vw, 1440px"
                        srcSet={[bg_16_9_596, '596w,', bg_16_9_1075, '1075w,', bg_16_9_1440, '1440w'].join(' ')}
                />
                <img sizes="(max-width: 9600px) 40vw, 3840px"
                     srcSet={[ bg_21_9_2562, '2562w,', bg_21_9_3840, '3840w'].join(' ')}
                     src={bg_21_9_3840}
                     alt="" />
            </picture>

            <div className="intro__title-block">
                <h1 className="title">Sergey Yuhimovich</h1>
                <h2 className="subtitle">Front-end Web / Mobile Developer</h2>
            </div>

            <a href="#" className="intro__next">Next</a>
        </div>
    )
};

export default Intro;
