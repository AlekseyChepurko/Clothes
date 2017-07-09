/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import './main.css'
class LeftMenu extends Component {
    render(){
        const {sideMenuIsOpen} = this.props;
        return <section styleName="common">
            <a styleName="order__button"><p>order</p></a>
            {sideMenuIsOpen
                ? null
                : <p styleName="dashboard bold">dashboard</p>
            }
            <p styleName="bold">ed {this.props.ed}</p>
        </section>
    }
}

LeftMenu.defaultProps = {
    ed: "18.08.2017"
};
const mapStateToProps = (state)=>({sideMenuIsOpen: state.sideMenu.isOpen});

export default connect(mapStateToProps)(LeftMenu);