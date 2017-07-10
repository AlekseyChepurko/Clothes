/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import DropdownMenu from 'Common/DropdownMenu'
import {menu} from './MenuStructure'
import './main.css'

class Mtm extends Component {
    render() {
        return <DropdownMenu menu={menu[this.props.lang]} />
    }
}

Mtm.defaultProps = {
    lang: 'en'
};

export default connect((state)=>({lang: state.language.lang}))(Mtm)