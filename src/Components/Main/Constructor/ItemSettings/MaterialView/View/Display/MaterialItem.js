/**
 * Created by Алексей on 15.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

// const pathToImgs = require.context('Static/images/materials/type1/', true);
// console.log(require.context);

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