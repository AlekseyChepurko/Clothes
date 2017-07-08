/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {locale} from './locale'
import './main.css'


class OrderControls extends Component {
    render() {
        return <section styleName="order__controls-wrap">
            <button styleName="active order__controls-item">{locale.stylist[this.props.lang]}</button>
            <button styleName="order__controls-item">{locale.order[this.props.lang]}</button>
        </section>
    }
}

OrderControls.defaultProps = {
    lang: "en"
};

export default OrderControls