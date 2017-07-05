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
                            <li className="socials-list__item">
                                <Social key={social.id}
                                        title={social.title}
                                        url={social.url}
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

