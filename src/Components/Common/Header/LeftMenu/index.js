/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import './main.css'
class LeftMenu extends Component {
    render(){
        return <section styleName="common">
            <a styleName="order__button"><p>order</p></a>
            <p styleName="dashboard bold">dashboard</p>
            <p styleName="bold">ed {this.props.ed}</p>
        </section>
    }
}

LeftMenu.defaultProps = {
    ed: "18.08.2017"
};

export default LeftMenu;