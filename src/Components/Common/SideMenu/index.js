/**
 * Created by Алексей on 07.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import './main.css'
import Navigation from "./Navigation";
import SearchBar from './SearchBar'
import Content from './Content'

class SideMenu extends Component {
    render(){
        const {isOpen} = this.props;

        return <section
            styleName={`common ${isOpen ? 'open' : ''}`}
            className='noWidth'>
            <div styleName="menu-wrap">
                <Navigation />
                <SearchBar />
                <Content/>
            </div>
        </section>
    }
}
const mapStateToProps = (state)=>({isOpen: state.sideMenu.isOpen});

export default connect(mapStateToProps)(SideMenu)