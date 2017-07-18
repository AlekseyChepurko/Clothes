/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from 'Root/actions'
import ItemSelect from './ItemSelect'
import ItemSettings from './ItemSettings'
import items from 'Root/constants/items.json'
import './main.css'
class Constructor extends Component {
    componentWillMount(){
        fetch(items).then(res=>res.json()).then((res)=>{
            // this.props.setOrder(res);
        })
    }
    render(){
        return <section styleName="common">
            {this.props.sideMenuIsOpen
            ? null
            : <ItemSelect/>}
            <ItemSettings/>
        </section>
    }
}
const mapStateToProps = (state)=>({sideMenuIsOpen: state.sideMenu.isOpen});
export default connect(mapStateToProps,{...actions})(Constructor);