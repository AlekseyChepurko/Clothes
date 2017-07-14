/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import im from 'Static/images/materials/type1/599.png'

import './main.css'

class Display extends Component {
    render() {
        return <section>
            <img src={im} alt=""/>

        </section>
    }
}

Display.defaultProps = {};

export default Display