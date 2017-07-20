/**
 * Created by Алексей on 15.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

class MaterialItem extends Component {
    render() {
        const {path, type, itemName} = this.props;
        return <img src={`${path}/${itemName}.png`} styleName="material__item" alt=""/>
    }
}

MaterialItem.defaultProps = {
    type: 1,
    itemName: '',
    path: '/'
};

export default MaterialItem