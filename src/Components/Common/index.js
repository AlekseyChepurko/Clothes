/**
 * Created by Алексей on 08.07.2017.
 */
import React,{Component} from 'react'
import Header from './Header'
import SideMenu from './SideMenu'
import './main.css'


class Common extends Component {
    render(){
        return <section styleName="common">
            <SideMenu/>
            <section styleName="content-wrap">
                <Header/>
                {this.props.children}
            </section>
        </section>
    }
}

export default Common