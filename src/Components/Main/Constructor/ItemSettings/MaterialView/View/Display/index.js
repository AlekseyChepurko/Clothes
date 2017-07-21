/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from 'nuka-carousel'
import _ from 'lodash'
import {sliderDecorators} from './Controlls/ControlButton'
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
            deps,
            order,
            orderStructure,
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
        console.log(getItemsToShow({
            itemName: 'coat',
            parameter: 'fason',
            structure: orderStructure,
            order: order,
            parameterDeps: deps,
        }));
        const path = '';
        // TODO refactor this shiiiiiit
        // TODO delete carousel. its a kind of... blah.
        return <scetion styleName="assHole">
               <section styleName="material__items-wrap">
                   <Carousel {...sliderSettings} decorators={sliderDecorators}>
                       <li></li>
                       {/*{items.map((item, key)=>*/}
                               {/*<img*/}
                                   {/*onClick={()=>{*/}
                                       {/*console.log(item);*/}
                                   {/*}}*/}
                                   {/*key={key}*/}
                                   {/*src={`/static/images/logos/${activeItemParameter}/type${activeType}/${item}.png`}*/}
                                   {/*alt=""/>*/}
                       {/*)}*/}
                   </Carousel>
               </section>
        </scetion>
    }
}

Display.defaultProps = {};

const mapStateToProps = (state)=>({
    deps: state.parametersDependencies,
    order: state.order,
    orderStructure: state.orderStructure,
    activeType: state.Constructor.activeItem.type,
    activeItemParameter: state.Constructor.activeItem.parameter,
    activeItemName: state.Constructor.activeItem.name,
    sideMenuIsOpen: state.sideMenu.isOpenAfterAnimation,
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation
});
export default connect(mapStateToProps)(Display)

function getItemsToShow(params) {
    const {itemName, parameter, parameterDeps, structure, order} = params;

    // console.log('next', getNextParameter(parameter, parameterDeps));

    if (structure.length === 0) return;

    const itemIndex = _.findIndex(structure, e => e.name === itemName),
        item = structure[itemIndex],
        parameterIndex = _.findIndex(item.subChoice, e => e.name === parameter);

    if (parameterIndex !== -1) {
        return item.subChoice[parameterIndex].parameters;
    }
    console.log(structure[itemIndex]);

    // if (structure[itemIndex].subChoice) {
    //     return getItemsToShow({
    //         ...params,
    //         structure: structure[itemIndex].subChoice[_.findIndex(structure[itemIndex].subChoice)]
    //     })}
    // console.log('next', getNextParameter(parameter, parameterDeps));
    // console.log('deps', getItemsDependencies(parameter, parameterDeps));
    // // const nextItemName =

    // return getItemsToShow({
    //     ...params,
    //     structure: structure[_.findIndex()]
    // });
}

function getItemsDependencies(parameter, parametersDependencies) {
    const index = _.findIndex(parametersDependencies, e => e.parameterName === parameter);
    const res = [];
    res.unshift(parameter);
    if (index !== -1) {
        res.push(getItemsDependencies(parametersDependencies[index].child, parametersDependencies))
    }
    return _.flatten(res);
}

function getNextParameter(parameter,parametersDependencies){
    if(parametersDependencies instanceof Array && parametersDependencies.length !==0){
        return parametersDependencies[
            _.findIndex(parametersDependencies, e=>e.parameterName===parameter)
            ].child;
    }
}

// fetch(deps).then(r=>r.json()).then(r => {
//     // console.log(getItemsDependencies('silhouette', r));
//     console.log(getItemsToShow(r, 'coat', 'edges'));
// });
