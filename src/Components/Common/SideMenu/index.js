/**
 * Created by Алексей on 07.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'

class SideMenu extends Component {
    render(){
        return <nav></nav>
    }
}
const mapStateToProps = (state)=>({});

export default connect(mapStateToProps)(SideMenu)