/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import './main.css'
class RightMenu extends Component {
    render(){
        return <section styleName="bold common">
            <p styleName="cost">{this.props.cost}</p>
            <a styleName="account">l</a>
            <button styleName="language">language</button>
        </section>
    }
}

RightMenu.defaultProps = {
    cost: 0
};

export default RightMenu;