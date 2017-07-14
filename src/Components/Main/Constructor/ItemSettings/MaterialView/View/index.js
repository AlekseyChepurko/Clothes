/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import Display from './Display'
import Footer from './Footer'
import im from 'Static/images/materials/type1/599.png'
import './main.css'

class View extends Component {
    render() {
        return <section styleName="material__view-wrap">

            <Display styleName="view" />
            {/*<section styleName="view">*/}
                {/*<img src={im} alt=""/>*/}
                {/*<img src={im} alt=""/>*/}

            {/*</section>*/}
            <Footer/>
        </section>
    }
}

View.defaultProps = {};

export default View