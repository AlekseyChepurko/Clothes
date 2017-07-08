/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import ItemSelect from './ItemSelect'
import ItemSettings from './ItemSettings'
import './main.css'
class Constructor extends Component {

    render(){
        return <section styleName="common">
            <ItemSelect/>
            <ItemSettings/>
        </section>
    }
}

export default Constructor;