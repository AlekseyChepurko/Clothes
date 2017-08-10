/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import Carousel from 'nuka-carousel'
import {sliderDecorators} from './ControlButton'
import {locale} from './locale'
import './main.css'

class Navigation extends Component {
    render() {
        const {itemSelectMenuIsOpen, items, activeValue, lang} = this.props;
        const sliderParams = {
            slidesToShow: itemSelectMenuIsOpen ? 4 : 6,
            style: {
                height: '100%'
            }
        };
        return <section styleName="wrap">
            <div styleName="slider">
                <Carousel {...sliderParams} decorators={sliderDecorators}>
                    {items.map((item,index)=>
                        {
                            return <div
                                onClick={()=>{
                                    this.props.setActiveItem(items.find(
                                        (elem)=>elem.name === item.name
                                    ))
                                }}
                                styleName={`item${activeValue === item.name ?' active':''}`}
                                key={index}>
                                {locale[lang][item.name] ? locale[lang][item.name] : item.name}
                            </div>
                        }
                        )}
                </Carousel>
            </div>
        </section>
    }
}

Navigation.defaultProps = {
    items: [],
    activeItem: {},
    itemSelectMenuIsOpen: true,
    lang: 'en'
};

export default Navigation