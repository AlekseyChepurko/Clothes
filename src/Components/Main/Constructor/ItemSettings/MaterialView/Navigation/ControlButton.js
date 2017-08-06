/**
 * Created by Алексей on 16.07.2017.
 */
import React from 'react'
import prevArrow from'./images/prevArrow.png'
import nextArrow from'./images/nextArrow.png'

const imgStyle = {
    height: "1.5rem",
    paddingLeft: 20,
    paddingRight: 20,
    cursor: "pointer"
};

export const ControlNextSlide = React.createClass({
    render() {
        const {currentSlide, slideCount, slidesToShow} = this.props;
        return slideCount > currentSlide+slidesToShow
                ? <img
                    src={
                        nextArrow
                    }
                    style={imgStyle}
                    onClick={this.props.nextSlide}/>
                : null
    }
});


// TODO it renders a million times per item click. wtf ???
export const ControlPrevSlide = React.createClass({
    render() {
        const {currentSlide, slideCount, slidesToShow} = this.props;
        return slideCount > currentSlide+slidesToShow-1 && currentSlide > 0
                    ? <img
                    src={
                        prevArrow
                    }
                    style={imgStyle}
                    onClick={this.props.previousSlide}/>
                    : null
    }
});



export const sliderDecorators = [
    {
        component: ControlPrevSlide,
        position: 'CenterLeft',
        style: {
            height: "100%"
        }
    },
    {
        component:ControlNextSlide,
        position: 'CenterRight',
        style: {
            height: "100%"
        }
    }
];