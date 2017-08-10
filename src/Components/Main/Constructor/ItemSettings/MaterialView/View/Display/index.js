/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import ChoiceWithPicture from './ChoiceWithPicture'
import {setActiveItemParameter} from 'Root/actions/itemSelectMenu'
import './main.css'


class Display extends Component {
    constructor(){
        super();
        this.state = {
            imgToShow: 3,
            slideIndex: 0
        }
    }
    // TODO refactor timeout
    componentWillReceiveProps(){
        this.setState({slideIndex: 1});
        setTimeout(()=>{
            this.setState({slideIndex: 0})
        },0);
    }

    render() {

        const {
            deps,
            order,
            orderStructure,
            activeItemParameter,
            activeItemName,
            itemSelectMenuIsOpen,
            sideMenuIsOpen} = this.props;

        let toShow = itemSelectMenuIsOpen ? 3 : 4;
        if(sideMenuIsOpen){
            toShow = 3;
        }

        const parameterDeps = getItemsDependencies(activeItemParameter, deps);
        const path = getActiveItemsPath({
            itemName: activeItemName,
            order: order,
            parameterDeps: parameterDeps,
        });
        const itemsArray = getItemsToShow({
            parameter: activeItemParameter,
            itemStructure: orderStructure[_.findIndex(orderStructure, o=>o.name===activeItemName)],
            path
        }) || [];

        const itemsObject = {};
        itemsArray.forEach( item => {
            itemsObject[item] = `/static/images/logos/${activeItemName}/${path.join('/')}/${item}.png`;
        });
        return <scetion styleName="assHole">
               <section styleName="material__items-wrap">
                   <ChoiceWithPicture items={itemsObject}/>
               </section>
        </scetion>
    }
}

Display.defaultProps = {};

const mapStateToProps = (state)=>({
    deps: state.parametersDependencies[1],
    order: state.order,
    orderStructure: state.orderStructure,
    activeType: state.Constructor.activeItem.type,
    activeItemParameter: state.Constructor.activeItem.parameter,
    activeItemName: state.Constructor.activeItem.name,
    sideMenuIsOpen: state.sideMenu.isOpenAfterAnimation,
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation
});
export default connect(mapStateToProps, {setActiveItemParameter})(Display)

function getItemsToShow(params) {
    const {itemStructure, path} = params;
    if(!itemStructure) return [];
    if (path.length > 0)
        return getItemsToShow({
            itemStructure: itemStructure.subChoice[_.findIndex(itemStructure.subChoice, n=>n.name===path[0])],
            path: _.drop(path),
        });
    return itemStructure.parameters

}

function getActiveItemsPath(params){
    const {order,parameterDeps, itemName} = params;
    const orderIndex = _.findIndex(order, o=>o.name===itemName);
    if(order.length === 0 ||  orderIndex===-1 ) return [];

    const path = [];
    const activeItemOrder = order[orderIndex].parameters;

    parameterDeps.forEach(parameter => {
        path.push(parameter);
        const i = _.findIndex(activeItemOrder, o=>o.name===parameter);
        if(i > -1)
            path.push(activeItemOrder[i].value)
    });
    return _.dropRight(path);
}

function getItemsDependencies(parameter, parametersDependencies) {
    const index = _.findIndex(parametersDependencies, e => e.parameterName === parameter);
    const res = [];
    if(parameter)
        res.unshift(parameter);
    if (index !== -1)
        res.unshift(getItemsDependencies(parametersDependencies[index].parent, parametersDependencies));
    return _.flatten(res);
}
