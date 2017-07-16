/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {locale} from './locale'
import './main.css'

class LeftMenu extends Component {
    render(){
        const {sideMenuIsOpen, lang} = this.props;
        return <section styleName="common" >
            <a styleName="order__button"><p>{locale[lang].order}</p></a>
            {sideMenuIsOpen
                ? null
                : process.env.projectName === "admin" ? <p styleName="dashboard bold">{locale[lang].dashboard}</p> : null
            }
            <p styleName="bold">ed {this.props.ed}</p>
        </section>
    }
}

LeftMenu.defaultProps = {
    ed: "18.08.2017"
};
const mapStateToProps = (state)=>({
    sideMenuIsOpen: state.sideMenu.isOpen,
    lang: state.language.lang
});

export default connect(mapStateToProps)(LeftMenu);