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
            this.setState({animate: !this.state.animate})
        };
    }

    // TODO clear timer interval
    componentDidMount(){
        this.animateInterval = setInterval(
            ()=>{
                if (this.state.animate){
                    this.setState({
                        img: (this.state.img+1)%90
                    })
                }
            },500);
    }
    render() {
        return <section styleName="preview-wrap" onClick={this.toggle()}>
            <img src={`${path}${this.state.img}.png`} styleName="preview__dummy-img" alt="dummy"/>
        </section>
    }
}

Preview.defaultProps = {};

export default Preview