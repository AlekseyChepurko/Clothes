/**
 * Created by Алексей on 07.07.2017.
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {actions} from 'Root/actions'
import './main.css'
import Navigation from "./Navigation";
import SearchBar from './SearchBar'
import Content from './Content'

class SideMenu extends Component {
    componentDidMount(){
        // TODO replace to the select menu component
        ReactDOM.findDOMNode(this).addEventListener("transitionend",(e)=>{
            e.stopImmediatePropagation();
            if (e.target === ReactDOM.findDOMNode(this)){
                this.props.toggleIsOpenAfterAnimation();
            }
        });
    }
    render(){
        const {isOpen} = this.props;

        return <section ref="a"
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

export default connect(mapStateToProps, {...actions})(SideMenu)