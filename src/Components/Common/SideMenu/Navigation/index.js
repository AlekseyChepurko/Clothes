/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

const items = [
    'order',
    'call',
    'email',
    'crm',
    'settings'
];

class Navigation extends Component {
    render() {
        return <nav styleName="navigation-wrap">
            {items.map((item,index)=>{
                const img = require(`./images/${item}.png`);
                return <a
                    onClick={(e)=>{
                        console.log(item)}}
                    styleName="navigation__link-item"
                    key={index}>
                    <img
                        styleName="navigation__link-image"
                        src={`${img}`}
                        alt={`${item}`}/>
                </a>
                }
            )}
        </nav>
    }
}

Navigation.defaultProps = {};

export default Navigation