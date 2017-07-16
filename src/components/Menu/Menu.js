import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import MenuList from './components/MenuList';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import './Menu.css';

class Menu extends Component {
    render() {
        const {reducers: { currentSection, menuIsOpen }, onMenuToggle } = this.props;

        return (
            <div className={currentSection === 'top' ? 'menu' : 'menu menu--onscroll'}>
                <div className="menu__background"/>

                <div className="content">
                    <div className="menu__logo">
                        <span>SY</span>
                    </div>

                    <button className="menu-btn" type="button" onClick={onMenuToggle}>
                        <FontAwesome className='menu-btn__icon'
                                     name='bars'
                        />
                    </button>

                    <MenuList currentSection={currentSection}/>
                </div>

                <Modal isOpen={menuIsOpen}
                       contentLabel="Modal"
                       onRequestClose={onMenuToggle}
                       className="menu-mobile"
                       overlayClassName="menu-mobile-overlay"
                >
                    <div className="menu-mobile__top-row">
                        <div className="menu-mobile__logo">
                            <span>SY</span>
                        </div>

                        <button className="menu-mobile__close-btn" type="button" onClick={onMenuToggle}>
                            <FontAwesome className='menu-btn__icon'
                                         name='times'
                            />
                        </button>
                    </div>

                    <MenuList currentSection={currentSection}
                              mobile={true}
                    />
                </Modal>
            </div>
        )
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(Menu);
