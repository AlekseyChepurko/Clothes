/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from 'Root/actions'
import {languages} from 'Root/constants/languages'
import {locale} from './locale'
import './main.css'
import loginImg from './images/login.png'
import downArrow from './images/down.png'

class RightMenu extends Component {
    render(){
        const {cost, locale, lang, changeLanguage } = this.props;
        return <section styleName="bold common order-third">
            <p styleName="cost">{cost}{locale[lang].money}</p>
            <a styleName="account"><img src={loginImg} alt="login"/></a>
            <LanguageChoice changeLanguage={changeLanguage}/>
        </section>
    }
}
class LanguageChoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            langChoiceOpen: false
        };
        this.toggleOpen = () => {
            this.setState({langChoiceOpen: !this.state.langChoiceOpen})
        }
    };

    render(){
        const {langChoiceOpen} = this.state;
        const {changeLanguage} = this.props;
        return <section styleName="choice-wrap">
            <button
                onClick={this.toggleOpen}
                styleName="language">
                <p>language</p>
                <img src={downArrow} alt="arrow"/>
            </button>
            <LanguageList open={langChoiceOpen} changeLanguage={changeLanguage} />
        </section>
    }
}
class LanguageList extends Component {

    render(){
        const {languages, open, changeLanguage} = this.props;
        return <ul
            style={{maxHeight: open ? `${2.5*languages.length}rem` : '0'}}
            styleName={`languageList-wrap ${open ? 'open' : ''}`}>
            {languages.map((lang, key)=>
                <li
                    styleName="language__list-item"
                    onClick={()=>{changeLanguage(lang.value)}}
                    key={key}>{lang.text}</li>)}
        </ul>
    }
}

LanguageList.defaultProps = {
    languages: languages
};

RightMenu.defaultProps = {
    cost: 0,
    locale
};

const mapStateToProps = (state)=>({lang: state.language.lang});
export default connect(mapStateToProps, {...actions})(RightMenu)