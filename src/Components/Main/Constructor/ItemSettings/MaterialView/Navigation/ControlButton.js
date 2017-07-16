/**
 * Created by Алексей on 16.07.2017.
 */
import React from 'react'
import prevArrow from'./images/prevArrow.png'
import nextArrow from'./images/nextArrow.png'
export const ControlNextSlide = React.createClass({
    render() {
        const {currentSlide, slideCount, slidesToShow} = this.props;
        return (
            <img
                src={
                    slideCount > currentSlide+slidesToShow
                        ? nextArrow
                        : null
                }
                style={{color: this.props.currentSlide === this.props.slideCount - this.props.slidesToShow ? "grey" : "white"}}
                onClick={this.props.nextSlide}/>
        )
    }
});


// TODO it renders a million times per item click. wtf ???
export const ControlPrevSlide = React.createClass({
    render() {
        const {currentSlide, slideCount, slidesToShow} = this.props;
        return (
            <img
                src={
                    slideCount > currentSlide+slidesToShow-1 && currentSlide > 0
                        ? prevArrow
                        : null

                }
                onClick={this.props.previousSlide} />
        )
    }
});

const style = {
    padding: 10,
    fontSize: "1.5rem"
};

export const sliderDecorators = [
    {
        component: ControlPrevSlide,
        position: 'CenterLeft',
        style: style
    },
    {
        component:ControlNextSlide,
        position: 'CenterRight',
        style: style
    }
];