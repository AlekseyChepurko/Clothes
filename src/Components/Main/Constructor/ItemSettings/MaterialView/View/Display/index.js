/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from 'nuka-carousel'
import {sliderDecorators} from './Controlls/ControlButton'

import './main.css'


class Display extends Component {
    constructor(){
        super();
        this.state = {
            imgToShow: 4
        }
    }

    // TODO get redux state itemSelectAnimationEnded
    componentWillReceiveProps(props){
        setTimeout(()=>{
            this.setState({imgToShow:
                props.itemSelectMenuIsOpen ? 4: 6
            })
        },300);
    }
    render() {
        const {activeType=1} = this.props;
        const {items} = require(`Static/images/materials/type${activeType}/res`);
        const sliderSettings = {
            slidesToShow: this.state.imgToShow,
            slidesToScroll: 1,
            cellSpacing: 0,

        };
        // TODO refactor this shiiiiiit
        // TODO delete carousel. its a kind of... blah.
        return <scetion styleName="assHole">
               <section styleName="material__items-wrap">
                   <Carousel {...sliderSettings} decorators={sliderDecorators}>
                       {items.map((item, key)=>
                               <img
                                   onClick={()=>{
                                       console.log(item);
                                   }}
                                   key={key}
                                   src={`/static/images/materials/type${activeType}/${item}.png`}
                                   alt=""/>
                       )}
                   </Carousel>
               </section>
        </scetion>
    }
}

Display.defaultProps = {};

const mapStateToProps = (state)=>({
    activeType: state.Constructor.itemSelectMenu.activeItem.type,
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpen
});
export default connect(mapStateToProps)(Display)