import React from 'react';
import './Intro.css';

import FontAwesome from 'react-fontawesome';

import bg_9_16_320 from './images/bg_9_16_w_320.jpg';
import bg_9_16_1050 from './images/bg_9_16_w_1050.jpg';
import bg_9_16_1534 from './images/bg_9_16_w_1534.jpg';

import bg_4_3_538 from './images/bg_4_3_w_538.jpg';
import bg_4_3_1025 from './images/bg_4_3_w_1025.jpg';
import bg_4_3_1388 from './images/bg_4_3_w_1388.jpg';

import bg_16_9_596 from './images/bg_16_9_w_596.jpg';
import bg_16_9_1075 from './images/bg_16_9_w_1075.jpg';
import bg_16_9_1440 from './images/bg_16_9_w_1440.jpg';

import bg_21_9_1024 from './images/bg_21_9_w_1024.jpg';
import bg_21_9_1830 from './images/bg_21_9_w_1830.jpg';
import bg_21_9_2464 from './images/bg_21_9_w_2464.jpg';
import bg_21_9_3020 from './images/bg_21_9_w_3020.jpg';
import bg_21_9_3506 from './images/bg_21_9_w_3506.jpg';
import bg_21_9_3943 from './images/bg_21_9_w_3943.jpg';
import bg_21_9_4400 from './images/bg_21_9_w_4400.jpg';
import bg_21_9_4797 from './images/bg_21_9_w_4797.jpg';
import bg_21_9_5217 from './images/bg_21_9_w_5217.jpg';

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
                <img sizes="(max-width: 5217px) 100vw, 5217px"
                     srcSet={[
                         bg_21_9_1024, '1024w,',
                         bg_21_9_1830, '1830w,',
                         bg_21_9_2464, '2464w,',
                         bg_21_9_3020, '3020w,',
                         bg_21_9_3506, '3506w,',
                         bg_21_9_3943, '3943w,',
                         bg_21_9_4400, '4400w,',
                         bg_21_9_4797, '4797w,',
                         bg_21_9_5217, '5217w,'
                     ].join(' ')}
                     src="bg_21_9_w_5217.jpg"
                     alt=""
                />
            </picture>

            <div className="intro__title-block">
                <h1 className="title">Sergey Yuhimovich</h1>
                <h2 className="subtitle">Front-end Web / Mobile Developer</h2>
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
