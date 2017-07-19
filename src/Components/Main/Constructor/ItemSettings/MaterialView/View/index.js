/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import Display from './Display'
import Footer from './Footer'
import './main.css'

class View extends Component {
    render() {
        return <section styleName="material__view-wrap">
            <Display styleName="view" />
            <Footer/>
        </section>
    }
}

View.defaultProps = {};

export default View