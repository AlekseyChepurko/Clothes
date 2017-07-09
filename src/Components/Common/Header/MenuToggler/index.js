/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import './main.css'


const toggleMenu = ()=>{
    console.log("menu toggler");
};
class MenuToggler extends Component {
    render() {
        return <section styleName="common" onClick={toggleMenu.bind(this)}>
            <section styleName="menu__toggler-wrap">
                <div styleName="line"></div>
                <div styleName="line"></div>
                <div styleName="line"></div>
            </section>
        </section>
    }
}

MenuToggler.defaultProps = {};

export default MenuToggler