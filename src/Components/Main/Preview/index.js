/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import defaultImage from 'Static/images/default.png'
import './main.css'

const path='/static/images/views/0/1/';

class Preview extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: 0,
            animate: true
        };
        this.toggle=()=>()=>{
            this.setState({animate: !this.state.animate});
            this.state.animate ? clearInterval(this.animateInterval) : this.animateInterval = setInterval(
                ()=>{
                    this.setState({
                        img: (this.state.img+1)%this.props.imageCount
                    })

                },this.props.speed);
        };
    }

    // TODO clear timer interval
    componentDidMount(){
        this.animateInterval = setInterval(
            ()=>{
                    this.setState({
                        img: (this.state.img+1)%this.props.imageCount
                    })

            },this.props.speed);
    }
    render() {
        const imgs = [];
        for(let i = 0; i<this.props.imageCount; i++){
            imgs.push(
                <img
                    key={i}
                    src={`${path}${i}.png`}
                    styleName={`preview__dummy-img ${this.state.img===i ? "dummy__img-active" : ""}`} alt="dummy"/>
            )
        }
        return <section
            styleName="preview-wrap"
            onClick={this.toggle()}>
            {/*<img src={`${path}${this.state.img}.png`} styleName="preview__dummy-img" alt="dummy"/>*/}
            {imgs}
        </section>
    }
}

Preview.defaultProps = {
    speed: 75,
    imageCount: 90
};

export default Preview