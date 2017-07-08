/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import Footer from './Footer'
import './main.css'

class View extends Component {
    render() {
        return <section styleName="material__view-wrap">
            <section styleName="view"></section>
            <Footer/>
        </section>
    }
}

View.defaultProps = {};

export default View