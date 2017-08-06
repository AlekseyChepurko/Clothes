/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

const path='/static/images/views/0/1/';


const getNextImageNumber = (currentNumber, imageCount)=>1 + (currentNumber)%imageCount;

class Preview extends Component {

    constructor(props){
        super(props);
        this.state = {
            mouseDown: false,
            img: 1,
            animate: true,
            scaleCoefficient: props.scaleCoefficient,
            imageYOffset: 0,
        };
        this.startAnimation=()=>{
            if (this.animateInterval) return;
            this.setState({animate: true},()=>{
                this.animateInterval = setInterval(
                    ()=>{
                        this.setState({
                            img: getNextImageNumber(this.state.img, this.props.imageCount)
                        })

                    },this.props.speed);
            });
        };
        this.stopAnimation = ()=>{
            this.setState({animate: false});
            clearInterval(this.animateInterval);
            this.animateInterval = undefined;
        };
        this._onMouseDown = ()=> e=>{
            e.preventDefault();
            this.setState({mouseDown: true});
            this.stopAnimation(e)
        };
        this._onMouseUp = ()=> e=>{
            this.setState({mouseDown: false,scaleCoefficient: 1, imageYOffset: 0, lastPos: 0});
            this.startAnimation(e)
        };
        this._onMouseMove=()=>e=>{
            if(this.state.mouseDown)
                this.setState({lastPos: e.nativeEvent.offsetY});
        };
        this._onMouseLeave = () =>{
            this.startAnimation();
            this.setState({
                mouseDown: false,
            });
        };
        this.onWheel=()=>(e)=>{
            e.stopPropagation();
            const roundedCoefficient = Math.round(this.state.scaleCoefficient * 10) / 10;
            if (roundedCoefficient === 1.0 && e.deltaY>0 || roundedCoefficient >= this.props.maxScale && e.deltaY<0) return;
            const wheelUp = e.deltaY < 0;
            const vla = e.target.getBoundingClientRect().top >0 ? e.target.getBoundingClientRect().top : 0;
            const offsetTop = e.clientY-vla;
            this.setState({
                imageYOffset: offsetTop,
                scaleCoefficient:
                    roundedCoefficient === 1.0
                    && !wheelUp
                    || roundedCoefficient >= this.props.maxScale
                    && wheelUp
                        ? roundedCoefficient
                        : this.state.scaleCoefficient- Math.round(e.deltaY*this.props.scaleRate*10)/10
            });
        }
    }

    // TODO clear timer interval
    componentDidMount(){
        this.animateInterval = setInterval(
            ()=>{
                    this.setState({
                        img: getNextImageNumber(this.state.img, this.props.imageCount)
                    })

            },this.props.speed);
    }
    render() {
        const imgs = [];
        for(let i = 1; i<this.props.imageCount+1; i++){
            imgs.push(
                <img
                    key={i}
                    src={`${path}${i}.png`}
                    styleName={`preview__dummy-img ${this.state.img===i ? "dummy__img-active" : ""}`} alt="dummy"/>
            )
        }
        return <section
            styleName="preview-wrap"
            onMouseLeave={this._onMouseLeave}
            onMouseMove={this._onMouseMove()}
            onMouseUp={this._onMouseUp()}
            onMouseDown={this._onMouseDown()}>
            <div
                onWheelCapture={this.onWheel()}
                style={{
                    position: 'relative',
                    transformOrigin: `50% ${this.state.imageYOffset}px`,
                    transform: `scale(${this.state.scaleCoefficient}) `
                }}>
                {imgs}
            </div>
        </section>
    }
}

Preview.defaultProps = {
    scaleCoefficient: 1,
    maxScale: 3,
    scaleRate: 0.001,
    speed: 75,
    imageCount: 89
};

export default Preview