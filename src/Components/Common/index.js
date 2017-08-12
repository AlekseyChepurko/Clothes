/**
 * Created by Алексей on 08.07.2017.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux';
import Header from './Header'
import SideMenu from './SideMenu'
import './main.css'


class Common extends Component {
    shouldComponentUpdate(nextProps){
        return this.props.sideMenuIsOpen !== nextProps.sideMenuIsOpen;
    }
    render(){
        return <section styleName="common">
            <SideMenu/>
            <section styleName={`content-wrap ${this.props.sideMenuIsOpen ? "min" : ""}`}>
                <Header/>
                {this.props.children}
            </section>
        </section>
    }
}

const mapState = (state) => ({
    sideMenuIsOpen: state.sideMenu.isOpen
});
export default connect(mapState)(Common)