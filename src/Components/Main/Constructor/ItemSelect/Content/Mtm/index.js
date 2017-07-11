/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Isvg from 'react-inlinesvg'
import {locale} from './locale'
import './main.css'

const items = [
    'jacket',
    'shirt',
    'trousers',
    'coat',
    'vest',
    'tie'
];

class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            hovered: false
        }
    }
    render(){
        const {item, lang} = this.props;
        const path = require(`./items/${item}.png`);
        return <li
            styleName={`mtm__item-wrap ${this.state.hovered ? "hovered" : ""}`}
            onMouseEnter={(()=>{this.setState({hovered: true})}).bind(this)}
            onMouseLeave={ (()=>{this.setState({hovered: false})}).bind(this) }>

            <button className={`noOpacity`} styleName={`hiding top`}>{locale[lang].show}</button>
            <img src={path} styleName={`${item} item`}/>
            <button className={`noOpacity`} styleName={`hiding bottom`}>{locale[lang].add}</button>
        </li>
    }
}

class Mtm extends Component {
    render(){
        const {lang} = this.props;
        return <ul styleName="common">
            {items.map((item,index) =>
                <Item
                    lang={lang}
                    item={item}
                    key={index}/>)}
        </ul>
    }
}

const mapStateToProps = (state)=>({
    lang: state.language.lang
});
export default connect(mapStateToProps)(Mtm);