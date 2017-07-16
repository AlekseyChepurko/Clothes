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
        this.startAnimation=()=>()=>{
            this.setState({animate: true});
            this.animateInterval = setInterval(
                ()=>{
                    this.setState({
                        img: (this.state.img+1)%this.props.imageCount
                    })

                },this.props.speed);
        };
        this.stopAnimation=()=>(e)=>{
            e.preventDefault();
            this.setState({animate: false});
            clearInterval(this.animateInterval)
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
        console.log("asd");
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
            onMouseUp={this.startAnimation()}
            onMouseDown={this.stopAnimation()}>
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