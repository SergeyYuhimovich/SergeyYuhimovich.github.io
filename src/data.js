import macos from './sections/2_SkillsAndTools/images/macos.svg';
import pycharm from './sections/2_SkillsAndTools/images/pycharm.svg';
import zeplin from './sections/2_SkillsAndTools/images/zeplin.svg';
import sketch from './sections/2_SkillsAndTools/images/sketch.svg';
import bitbucket from './sections/2_SkillsAndTools/images/bitbucket.svg';
import gitlab from './sections/2_SkillsAndTools/images/gitlab.svg';
import slack from './sections/2_SkillsAndTools/images/slack.svg';
import toggl from './sections/2_SkillsAndTools/images/toggl.svg';

import nicechatRect from './sections/3_Experience/images/nicechat-rect.jpg';
import coopicoRect from './sections/3_Experience/images/coopico-rect.jpg';
import navtvRect from './sections/3_Experience/images/navtv-rect.jpg';
import navtvMobileRect from './sections/3_Experience/images/navtv-mobile-rect-2.jpg';
import malachiteRect from './sections/3_Experience/images/malachite-rect.jpg';
import myHomeRect from './sections/3_Experience/images/myhome-rect.jpg';

import nicechat from './sections/3_Experience/images/nicechat.png';
import coopico from './sections/3_Experience/images/coopico.png';
import navtv from './sections/3_Experience/images/navtv.png';
import navtvMobile from './sections/3_Experience/images/navtv-mobile.png';
import malachite from './sections/3_Experience/images/malachite.png';
import myHome from './sections/3_Experience/images/myhome.png';

export const aboutMeData = {
    text: [
        'Hi! My name is Sergey Yuhimovich and I am Ukraine-based Front-end Developer creating responsive websites and applications.',
        'HTML 5, SCSS, React and Redux are my preferrable technologies, but I also have experience in React Native mobile applications development for iOS and Android platform.',
        'You can find more information about my skills and experience on this page and in my CV, which you can download by using the button below.',
        'Feel free to contact me.'
        ],

    cv: 'fff'
};

export const skillsData = [
    {
        id: 1,
        title: 'HTML 5',
        icon: '',
        value: '90%'
    },

    {
        id: 2,
        title: 'CSS 3',
        icon: '',
        value: '90%'
    },

    {
        id: 3,
        title: 'SCSS',
        icon: '',
        value: '75%'
    },

    {
        id: 4,
        title: 'Bootstrap',
        icon: '',
        value: '50%'
    },

    {
        id: 5,
        title: 'Foundation',
        icon: '',
        value: '70%'
    },

    {
        id: 6,
        title: 'JavaScript',
        icon: '',
        value: '35%'
    },

    {
        id: 7,
        title: 'React',
        icon: '',
        value: '35%'
    },

    {
        id: 8,
        title: 'React Native',
        icon: '',
        value: '30%'
    },

    {
        id: 9,
        title: 'Redux',
        icon: '',
        value: '25%'
    },

    {
        id: 10,
        title: 'GIT',
        icon: '',
        value: '50%'
    }
];

export const toolsData = [
    {
        id: 1,
        title: 'macOS',
        icon: macos
    },

    {
        id: 2,
        title: 'PyCharm',
        icon: pycharm
    },

    {
        id: 3,
        title: 'Zeplin',
        icon: zeplin
    },

    {
        id: 4,
        title: 'Sketch',
        icon: sketch
    },

    {
        id: 5,
        title: 'BitBucket',
        icon: bitbucket
    },

    {
        id: 6,
        title: 'GitLab',
        icon: gitlab
    },

    {
        id: 7,
        title: 'Slack',
        icon: slack
    },

    {
        id: 8,
        title: 'Toggl',
        icon: toggl
    }
];

export const projectsData = [
    {
        id: 1,
        title: 'Nice Chat',
        description: 'Full featured eCommerce oriented online chat solution',
        stack: ['HTML 5', 'CSS 3', 'SCSS', 'React', 'React Router', 'Alt', 'Webpack', 'jQuery', 'Django Templates'],
        image: nicechat,
        imageRect: nicechatRect,
        url: 'https://www.nice.chat/'
    },

    {
        id: 2,
        title: 'Coopico',
        description: 'Classified advertisements website',
        stack: ['HTML 5', 'CSS 3', 'SCSS', 'Angular'],
        image: coopico,
        imageRect: coopicoRect,
        url: 'https://www.coopico.com/'
    },

    {
        id: 3,
        title: 'NAV-TV',
        description: 'American manufacturer and distributor of automotive safety, entertainment and convenience products',
        stack: ['HTML 5', 'CSS 3', 'SCSS', 'JavaScript', 'jQuery', 'Django Templates'],
        image: navtv,
        imageRect: navtvRect,
        url: 'https://navtv.com/'
    },

    {
        id: 4,
        title: 'NAV-TV Live Chat',
        description: 'Mobile chat app for NAVTV',
        stack: ['React Native'],
        image: navtvMobile,
        imageRect: navtvMobileRect,
        url: 'https://itunes.apple.com/us/developer/navtv/id1182529526'
    },

    {
        id: 5,
        title: 'Malachite',
        description: 'SEO, SMM, UI/UX studio',
        stack: ['HTML 5', 'SCSS', 'Foundation'],
        image: malachite,
        imageRect: malachiteRect,
        url: 'https://malachitestudio.com/'
    },

    {
        id: 6,
        title: 'My Home',
        description: 'Mobile app for remote water heater control',
        stack: ['React Native'],
        image: myHome,
        imageRect: myHomeRect,
        in_development: true
    }
];

export const socialsData = [
    {
        id: 1,
        title: 'Telegram',
        icon: '',
        url: 'http://t.me/lvcivs'
    },

    {
        id: 2,
        title: 'Facebook',
        icon: '',
        url: 'https://www.facebook.com/sergey.yuhimovich'
    },

    {
        id: 3,
        title: 'Skype',
        icon: '',
        url: 'skype:lvcivs_m?chat'
    },

    {
        id: 4,
        title: 'LinkedIn',
        icon: '',
        url: 'https://www.linkedin.com/in/sergey-yuhimovich-3b03a86b/'
    },
];
