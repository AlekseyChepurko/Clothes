/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemSelect from './ItemSelect'
import ItemSettings from './ItemSettings'
import './main.css'
class Constructor extends Component {

    render(){
        return <section styleName="common">
            {this.props.sideMenuIsOpen
            ? null
            : <ItemSelect/>}
            <ItemSettings/>
        </section>
    }
}
const mapStateToProps = (state)=>({sideMenuIsOpen: state.sideMenu.isOpen});
export default connect(mapStateToProps)(Constructor);