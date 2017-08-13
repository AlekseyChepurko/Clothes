/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import TextMenuItem from './TextMenuItem';
import {displayOrder} from 'Root/constants/ItemOptionsDisplayOrder'
import {setActiveItemParameter} from 'Root/actions/itemSelectMenu';
import './main.css';


class Display extends Component {
    // TODO refactor timeout
    componentWillReceiveProps(){
        // this.setState({slideIndex: 1});
        // setTimeout(()=>{
        //     this.setState({slideIndex: 0})
        // },0);
    }

    render() {

        const {
            deps,
            order,
            orderStructure,
            activeItemParameter,
            activeItemName} = this.props;

        const activeItem = Object.assign({}, order[_.findIndex(order, orderItem => orderItem.name === activeItemName)]),
                menuItems = sortByOrderArray(activeItem ? activeItem.parameters : []);

        menuItems.forEach(menuItem => {
            const parameterDeps = getItemsDependencies(menuItem.name, deps);
            const path = getActiveItemsPath({
                itemName: activeItemName,
                order: order,
                parameterDeps: parameterDeps,
            });
            menuItem.choices = getItemsToShow({
                    parameter: menuItem.name,
                    itemStructure: orderStructure[_.findIndex(orderStructure, o=>o.name===activeItemName)],
                    path
                }) || [];
        });
        return <div styleName="item__settings-wrap">
                <ul styleName="menu-wrap">
                {menuItems.map( menuItem => <TextMenuItem
                    key={menuItem.name}
                    tabName={menuItem.name}
                    items={menuItem.choices}
                    chosenParameter={menuItem.value}
                    active={menuItem.name === activeItemParameter}
                />)}
            </ul>
            <div styleName="item__parameter-image">
                <span>picture</span>
            </div>
        </div>
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

function sortByOrderArray(target=[],orderArray=displayOrder){
    return target.sort( (a,b) =>
        orderArray.indexOf(a.name) >= orderArray.indexOf(b.name) ? 1 : -1
    )
}