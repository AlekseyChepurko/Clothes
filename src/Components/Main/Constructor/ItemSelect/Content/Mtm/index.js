/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Isvg from 'react-inlinesvg'
import {locale} from './locale'
import {setActiveItem} from 'Root/actions'
import './main.css'

const items = [
    {name:'jacket', type: 1},
    {name:'shirt', type: 2},
    {name:'trousers', type: 1},
    {name:'coat', type: 1},
    {name:'vest', type: 1},
    {name:'tie', type: 2},
];

class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            hovered: false
        }
    }
    render(){
        const {item, lang, isActive, onClick} = this.props;
        const path = require(`./items/${item.name}.png`);
        return <li
            styleName={`mtm__item-wrap ${this.state.hovered ? "hovered" : ""} ${isActive ? "mtm__item-active" : ""}` }
            onClick={()=>{onClick(item)}}
            onMouseEnter={(()=>{this.setState({hovered: true})}).bind(this)}
            onMouseLeave={ (()=>{this.setState({hovered: false})}).bind(this) }>

            <button className={`noOpacity`} styleName={`hiding top`}>{locale[lang].show}</button>
            <img src={path} styleName={`${item.name} item`}/>
            <button className={`noOpacity`} styleName={`hiding bottom`}>{locale[lang].add}</button>
        </li>
    }
}

class Mtm extends Component {
    render(){
        const {lang, setActiveItem, activeItem} = this.props;
        return <ul styleName="common">
            {items.map((item,index) =>
                <Item
                    onClick={setActiveItem}
                    isActive={item.name === activeItem.name}
                    lang={lang}
                    item={item}
                    key={index}/>)}
        </ul>
    }
}

const mapStateToProps = (state)=>({
    lang: state.language.lang,
    activeItem: state.itemSelectMenu.activeItem
});
export default connect(mapStateToProps, {setActiveItem})(Mtm);