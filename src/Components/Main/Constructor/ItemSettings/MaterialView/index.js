/**
 * Created by Алексей on 08.07.2017.
 */
import React,{Component} from 'react'
import Navigation from './Navigation'
import View from './View'
import './main.css'

class MaterialView extends Component {
    render(){
        return <section styleName="wrap">
            <Navigation/>
            <View/>
        </section>
    }
}

export default MaterialView