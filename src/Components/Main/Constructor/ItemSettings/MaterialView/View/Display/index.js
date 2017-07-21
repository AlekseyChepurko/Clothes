/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from 'nuka-carousel'
import _ from 'lodash'
import {sliderDecorators} from './Controlls/ControlButton'
import deps from 'Root/constants/parametrsDependencies.json'
import './main.css'


class Display extends Component {
    constructor(){
        super();
        this.state = {
            imgToShow: 3
        }
    }

    render() {
        const {
            activeType=1,
            activeItemParameter,
            activeItemName,
            itemSelectMenuIsOpen,
            sideMenuIsOpen} = this.props;
        const {items} = {};

        let toShow = itemSelectMenuIsOpen ? 3 : 4;
        if(sideMenuIsOpen){
            toShow = 3;
        }
        const sliderSettings = {
            slidesToShow: toShow,
            slidesToScroll: toShow-1,
            cellSpacing: 20,

        };


        const path = '';
        // TODO refactor this shiiiiiit
        // TODO delete carousel. its a kind of... blah.
        return <scetion styleName="assHole">
               <section styleName="material__items-wrap">
                   <Carousel {...sliderSettings} decorators={sliderDecorators}>
                       {items.map((item, key)=>
                               <img
                                   onClick={()=>{
                                       console.log(item);
                                   }}
                                   key={key}
                                   src={`/static/images/logos/${activeItemParameter}/type${activeType}/${item}.png`}
                                   alt=""/>
                       )}
                   </Carousel>
               </section>
        </scetion>
    }
}

Display.defaultProps = {};

const mapStateToProps = (state)=>({
    orderStructure: state.orderStructure,
    activeType: state.Constructor.activeItem.type,
    activeItemParameter: state.Constructor.activeItem.parameter,
    activeItemName: state.Constructor.activeItem.name,
    sideMenuIsOpen: state.sideMenu.isOpenAfterAnimation,
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation
});
export default connect(mapStateToProps)(Display)

function getItemsToShow(structure, item, parameter){
    if(_.findIndex( structure[item].subChoice, e=>e.name===parameter) !== -1 ){}
}

function getItemsDependencies(parameter, parametersDependencies){
    const index = _.findIndex(parametersDependencies, e=> e.parameterName===parameter);
    const res = [];
    res.unshift(parameter);
    if (index !== -1){
        res.unshift(getItemsDependencies( parametersDependencies[index].parent ,parametersDependencies))
    }
    return _.flatten(res);
}

fetch(deps).then(r=>r.json()).then(r => {
    console.log(getItemsDependencies('edges', r));
});
