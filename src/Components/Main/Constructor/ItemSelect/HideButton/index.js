/**
 * Created by Алексей on 11.07.2017.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
// import {toggleItemsSelectMenu, toggleIsOpenAfterAnimation} from 'Root/actions'
import {actions} from 'Root/actions'


import arrow from './images/arrow.png'
import './main.css'

class HideButton extends Component {

    render() {
        return <button
            onClick={this.props.toggleItemsSelectMenu}
            styleName="select__visibility-button">
            <img
                className="sss"
                styleName={`${this.props.menuOpen ? 'menu-opened' : ''}`}
                src={arrow}
                alt="arrow"/>
        </button>
    }
}

HideButton.defaultProps = {};

const mapState = (state)=>({
    menuOpen: state.Constructor.itemSelectMenu.isOpen
});
export default connect(mapState, {...actions})(HideButton)