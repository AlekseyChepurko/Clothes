/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import MaterialView from './MaterialView'
import OrderControls from './OrderControls/index'
import './main.css'

class ItemSettings extends Component {
    render(){
        return <section styleName="wrap">
            <MaterialView/>
            <OrderControls/>
        </section>
    }
}

export default ItemSettings