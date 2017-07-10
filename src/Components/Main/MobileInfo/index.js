/**
 * Created by Алексей on 10.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

class MobileInfo extends Component {
    render() {
        return <section styleName="info-wrap">
            <div>ED {this.props.ed}</div>
            <div>{this.props.totalPrice} $</div>
        </section>
    }
}

MobileInfo.defaultProps = {
    totalPrice: 0,
    ed: '12.08.2017'
};

export default MobileInfo