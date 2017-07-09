/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {openSideMenu, closeSideMenu} from 'Root/actions'
import './main.css'

class MenuToggler extends Component {

    constructor(props){
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(state){
        state
            ? this.props.closeSideMenu()
            : this.props.openSideMenu()
    }

    render() {
        const {isOpen} = this.props;
        return <section styleName="common" onClick={()=>{this.toggleMenu(isOpen)}}>
            <section styleName={`menu__toggler-wrap ${isOpen ? 'opened' : ''}`}>
                <div styleName="line"></div>
                <div styleName="line"></div>
                <div styleName="line"></div>
            </section>
        </section>
    }
}

MenuToggler.defaultProps = {};

const mapStateToProps = (state)=>({isOpen: state.sideMenu.isOpen});

export default connect(mapStateToProps, {openSideMenu, closeSideMenu} )(MenuToggler)