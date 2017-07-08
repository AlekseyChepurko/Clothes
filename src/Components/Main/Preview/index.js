/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import defaultImage from 'Static/images/default.png'
import './main.css'

class Preview extends Component {
    render() {
        return <section styleName="preview-wrap">
            <img src={defaultImage} styleName="preview__dummy-img" alt="dummy"/>
        </section>
    }
}

Preview.defaultProps = {};

export default Preview