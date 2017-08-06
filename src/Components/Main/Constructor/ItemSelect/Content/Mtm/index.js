/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {items} from 'Root/constants/SelectItems'
import {locale} from './locale'
import {actions} from 'Root/actions'
import './main.css'


function getInitialItemOrder(itemStructure){
    const {subChoice, parameters} = itemStructure;
    const res = [];
    if (parameters){
        res.push({name: itemStructure.name, value: parameters[0]});
    }
    if(subChoice) {
        subChoice.forEach((e)=>{
            res.push(getInitialItemOrder(e));
        })
    }
    return _.uniqBy(_.flattenDeep(res), e=>e.name);
}

class Mtm extends Component {
    render(){
        const {
            lang,
            setActiveItem,
            activeItem,
            chosenItems,
            addItem,
            orderStructure,
            removeItem} = this.props;
        return <ul styleName="common">
            {items.map((item,index) =>
            {
                return <Item
                    onClick={setActiveItem}
                    addItem={addItem}
                    removeItem={removeItem}
                    isActive={item.name === activeItem.name}
                    isAdded={_.findIndex(chosenItems, e=>e.name===item.name ) !== -1}
                    lang={lang}
                    item={orderStructure.length===0 ? item : Object.assign({},{
                        parameters: getInitialItemOrder(orderStructure[_.findIndex(orderStructure, e=>e.name===item.name)])
                    }, item)}
                    key={index}/>
            })
            }
        </ul>
    }
}

class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            hovered: false
        }
    }
    render(){
        const {
            item,
            lang,
            isActive,
            isAdded,
            onClick,
            addItem,
            removeItem} = this.props;
        const image = require(`./items/${item.name}.png`),
            activeImage = require(`./items/${item.name}_picked.png`);
        return <li
            styleName={`mtm__item-wrap ${this.state.hovered ? "hovered" : ""} ${isActive ? "mtm__item-active" : ""}` }
            onClick={()=>{onClick(item)}}
            onMouseEnter={(()=>{this.setState({hovered: true})})}
            onMouseLeave={ (()=>{this.setState({hovered: false})})}>

            {/*TODO set visibility filter*/}
            <button
                className={`noOpacity`}
                styleName={`hiding top`}>{locale[lang].show}</button>

            <img src={isActive ? activeImage : image} styleName={`${item.name} item`}/>

            <AddAndRemoveButton
                className={`noOpacity`}
                item={item}
                onClick={isAdded ? removeItem : addItem}
                styleName={`hiding bottom`}> {locale[lang][`${isAdded ? "remove" : "add"}`]} </AddAndRemoveButton>
        </li>
    }
}

class AddAndRemoveButton extends Component{

    render(){
        const {item, onClick} = this.props;
        return <button
            onClick={(e)=>{e.stopPropagation(); onClick(item)}}
            className={`noOpacity`}
            styleName={`hiding bottom`}>{this.props.children}</button>
    }
}


const mapStateToProps = (state)=>({
    lang: state.language.lang,
    activeItem: state.Constructor.activeItem,
    chosenItems: state.order,
    orderStructure: state.orderStructure
});
export default connect(mapStateToProps, {...actions})(Mtm);