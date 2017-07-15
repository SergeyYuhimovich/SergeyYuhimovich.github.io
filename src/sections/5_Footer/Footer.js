import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './Footer.css';

import Social from './components/Social';


class Footer extends Component {
    render() {
        const {reducers: {socials} } = this.props;

        return (
            <div className="footer">
                <div className="content">
                    <ul className="socials-list">
                        {socials.map( (social) =>
                            <li className="socials-list__item" key={social.id}>
                                <Social title={social.title}
                                        url={social.url}
                                        icon={social.icon}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Footer);
