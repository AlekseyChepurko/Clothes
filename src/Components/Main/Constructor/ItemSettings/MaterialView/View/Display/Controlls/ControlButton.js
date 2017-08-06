/**
 * Created by Алексей on 16.07.2017.
 */
import React, {Component} from 'react'

export const ControlNextSlide = React.createClass({
    render() {
        return (
            <button
                style={{
                    color: 'white',
                    display: this.props.currentSlide >= this.props.slideCount - this.props.slidesToShow ? "none" : "block"}}
                onClick={this.props.nextSlide}>
                {">"}
            </button>
        )
    }
});


// TODO it renders a million times per item click. wtf ???
export const ControlPrevSlide = React.createClass({
    render() {
        return (
            <button
                style={{
                    color: 'white',
                    display: this.props.currentSlide === 0 ? "none" : "block"}}
                onClick={this.props.previousSlide}>
                {"<"}
            </button>
        )
    }
});

const style = {
    padding: 20,
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