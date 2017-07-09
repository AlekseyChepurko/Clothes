/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import Order from './Order'
import Crm from './Crm'
import './main.css'

class Content extends Component {
    render() {
        return <section>
            <Order />
        </section>
    }
}

Content.defaultProps = {
    activeTab: "Order"
};

export default Content