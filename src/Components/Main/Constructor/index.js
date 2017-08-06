/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {actions} from 'Root/actions'
import ItemSelect from './ItemSelect'
import ItemSettings from './ItemSettings'
// import items from 'Root/constants/items.json'
import items from 'Static/images/logos/res.json'
import parameterDependencies from 'Root/constants/parametrsDependencies.json'
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

class Constructor extends Component {
    componentWillMount(){
        // TODO refactor forEach
        fetch(items).then(res=>res.json()).then((res)=>{
            this.props.initOrderStructure(res);
            const a =[];
            res.forEach(e=>{
                a.push({
                    name: e.name,
                    parameters: getInitialItemOrder(e)
                });
            });
            this.props.setOrder(a);
        });
        fetch(parameterDependencies).then(r=>r.json()).then(r=>{
            this.props.setParametersDependencies(r);
        })
    }
    render(){
        return <section styleName="common" style={{zIndex: 10}}>
            {this.props.sideMenuIsOpen
            ? null
            : <ItemSelect/>}
            <ItemSettings/>
        </section>
    }
}
const mapStateToProps = (state)=>({sideMenuIsOpen: state.sideMenu.isOpen});
export default connect(mapStateToProps,{...actions})(Constructor);