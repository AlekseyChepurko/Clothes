/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

class Navigation extends Component {
    render() {
        return <ul styleName="wrap">
            {this.props.chosenItems.map((item,index)=>
                <li styleName={`item${item.active?' active':''}`}
                    key={index}>
                        {item.name}
                </li>)}
        </ul>
    }
}

Navigation.defaultProps = {
    chosenItems: [{name: 'trousers', active: true}, {name: 'jacket'}, {name:'coat'}]
};

export default Navigation