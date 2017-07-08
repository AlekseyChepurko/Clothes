/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import Isvg from 'react-inlinesvg'
import './main.css'

const items = [
    'jacket',
    'shirt',
    'trousers',
    'coat',
    'vest',
    'tie'
];
let path;

const Item = (item, index)=>{
    path = require(`./items/${item}.png`);
    return <li key={index} styleName="mtm__item-wrap">
        <img src={path} styleName={`${item} item`}/>
    </li>
    };

class Mtm extends Component {
    render(){
        return <ul styleName="common">
            {items.map((item,index) => Item(item, index))}
        </ul>
    }
}

export default Mtm;