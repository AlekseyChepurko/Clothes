/**
 * Created by Алексей on 08.07.2017.
 */
import React,{Component} from 'react'
import Header from './Header'
import SideMenu from './SideMenu'


class Common extends Component {
    render(){
        return <section>
            <SideMenu/>
            <section>
                <Header/>
                {this.props.children}
            </section>
        </section>
    }
}

export default Common