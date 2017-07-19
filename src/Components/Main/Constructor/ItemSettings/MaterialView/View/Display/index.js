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
            imgToShow: 3
        }
    }

    render() {
        const {activeType=1, itemSelectMenuIsOpen, sideMenuIsOpen} = this.props;
        const {items} = require(`Static/images/logos/material/type${activeType}/res`);
        let toShow = itemSelectMenuIsOpen ? 3 : 4;
        if(sideMenuIsOpen){
            toShow = 3;
        }
        const sliderSettings = {
            slidesToShow: toShow,
            slidesToScroll: toShow-1,
            cellSpacing: 20,

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
                                   src={`/static/images/logos/material/type${activeType}/${item}.png`}
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
    sideMenuIsOpen: state.sideMenu.isOpenAfterAnimation,
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation
});
export default connect(mapStateToProps)(Display)