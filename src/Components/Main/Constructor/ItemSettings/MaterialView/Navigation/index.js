/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from 'nuka-carousel'
import {sliderDecorators} from './ControlButton'
import {setActiveItem,addItem, removeItem} from 'Root/actions'
import {items} from 'Root/constants/SelectItems'
import {locale} from './locale'
import './main.css'

class Navigation extends Component {
    render() {
        const {itemSelectMenuIsOpen, chosenItems, activeItem, lang} = this.props;
        const sliderParams = {
            slideHeight: 0,
            slidesToShow: itemSelectMenuIsOpen ? 4 : 6,
        };
        return <section styleName="wrap">
            <div styleName="slider">
                <Carousel {...sliderParams} styleName="asd" decorators={sliderDecorators}>
                    {chosenItems.map((item,index)=>
                        <div
                            onClick={()=>{this.props.setActiveItem(items.find(
                                (elem)=>elem.name === item.name
                            ))}}
                            styleName={`item${activeItem.name === item.name ?' active':''}`}
                            key={index}>
                            {locale[lang][item.name]}
                        </div>)}
                </Carousel>
            </div>
        </section>
    }
}

Navigation.defaultProps = {
    chosenItems: [{name: 'trousers', active: true}, {name: 'jacket'}, {name:'coat'}]
};

const mapStateToProps = (state)=>({
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpen,
    lang: state.language.lang,
    chosenItems: state.Constructor.itemSelectMenu.addedItems,
    activeItem: state.Constructor.itemSelectMenu.activeItem,
});
export default connect(mapStateToProps, {setActiveItem})(Navigation)