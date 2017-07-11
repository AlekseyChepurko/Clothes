/**
 * Created by Алексей on 11.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleItemsSelectMenu} from 'Root/actions'

import arrow from './images/arrow.png'
import './main.css'

class HideButton extends Component {
    render() {
        return <button
            onClick={this.props.toggleItemsSelectMenu}
            styleName="select__visibility-button">
            <img src={arrow} alt=""/>
        </button>
    }
}

HideButton.defaultProps = {};

const mapState = (state)=>({});
export default connect(mapState, {toggleItemsSelectMenu})(HideButton)