/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Carousel from 'nuka-carousel'
import {sliderDecorators} from './ControlButton'
import {actions} from 'Root/actions'
import {items} from 'Root/constants/SelectItems'
import {locale} from './locale'
import './main.css'

class Navigation extends Component {
    render() {
        const {itemSelectMenuIsOpen, chosenItems, activeItem, lang} = this.props;
        const sliderParams = {
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
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation,
    lang: state.language.lang,
    chosenItems: state.order,
    activeItem: state.Constructor.itemSelectMenu.activeItem,
});
export default connect(mapStateToProps, {...actions})(Navigation)