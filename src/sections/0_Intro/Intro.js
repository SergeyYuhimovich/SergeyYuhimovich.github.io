import React from 'react';
import './Intro.css';

import FontAwesome from 'react-fontawesome';

import bg1_9_16_640 from './images/bg1_9_16_640.jpg';
import bg1_9_16_738 from './images/bg1_9_16_738.jpg';
import bg1_9_16_810 from './images/bg1_9_16_810.jpg';

import bg1_4_3_819 from './images/bg1_4_3_819.jpg';
import bg1_4_3_1053 from './images/bg1_4_3_1053.jpg';
import bg1_4_3_1226 from './images/bg1_4_3_1226.jpg';
import bg1_4_3_1388 from './images/bg1_4_3_1388.jpg';

import bg1_16_9_1106 from './images/bg1_16_9_1106.jpg';
import bg1_16_9_1289 from './images/bg1_16_9_1289.jpg';
import bg1_16_9_1440 from './images/bg1_16_9_1440.jpg';

import bg1_1252 from './images/bg1_1252.jpg';
import bg1_1756 from './images/bg1_1756.jpg';
import bg1_2199 from './images/bg1_2199.jpg';
import bg1_2560 from './images/bg1_2560.jpg';

const Intro = () => {
    return (
        <div className="intro">
            <picture className="intro__bg">
                <source media="(max-width: 767px)"
                        sizes="(max-width: 810px) 100vw, 810px"
                        srcSet={[
                            bg1_9_16_640, '640w,',
                            bg1_9_16_738, '738w,',
                            bg1_9_16_810, '810w'
                        ].join(' ')}
                />

                <source media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 1388px) 70vw, 1388px"
                        srcSet={[
                            bg1_4_3_819, '819w,',
                            bg1_4_3_1053, '1025w,',
                            bg1_4_3_1226, '1226w,',
                            bg1_4_3_1388, '1388w'
                        ].join(' ')}
                />

                <source media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 2400px) 60vw, 1440px"
                        srcSet={[
                            bg1_16_9_1106, '1106w,',
                            bg1_16_9_1289, '1289w,',
                            bg1_16_9_1440, '1440w'
                        ].join(' ')}
                />

                <img sizes="(max-width: 6400px) 40vw, 2560px"
                     srcSet={[
                         bg1_1252, '1252w,',
                         bg1_1756, '1756w,',
                         bg1_2199, '2199w,',
                         bg1_2560, '2560w,',
                     ].join(' ')}
                     src={bg1_2560}
                     alt=""
                />
            </picture>

            <div className="intro__tint" />

            <div className="intro__title-block">
                <h1 className="title">Sergey Yuhimovich</h1>
                <h2 className="subtitle">Front-end Web <span>&</span> Mobile Developer</h2>
            </div>

            <a href="#" className="next-btn">
                <FontAwesome className='next-btn__icon'
                             name='angle-down'
                />
            </a>
        </div>
    )
};

export default Intro;
