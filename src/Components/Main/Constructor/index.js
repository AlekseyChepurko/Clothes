/**
 * Created by Алексей on 08.07.2017.
 */

import React, {Component} from 'react'
import Mtm from './Mtm'
import Rtw from './Rtw'
import './main.css'
import Header from "../../Common/Header/index";

class Constructor extends Component {
    constructor(props){
        super(props);
        this.state = {
            mtmChoose: true
        }
    };
    render(){
        return <section styleName="common">
            <section styleName="constructor__choice-wrap">
                <button
                    style={{color: this.state.mtmChoose ? "#8f7548": null}}
                    styleName={`constructor__choice`}
                    onClick={(()=>{this.setState({mtmChoose: true})}).bind(this)}
                >mtm</button>

                <button
                    style={{color: !this.state.mtmChoose ? "#8f7548": null}}
                    styleName={`constructor__choice`}
                    onClick={(()=>{this.setState({mtmChoose: false})}).bind(this)}
                >rtw</button>
            </section>
            <section>
                {this.state.mtmChoose
                    ? <Mtm />
                    : <Rtw />
                }
            </section>
        </section>
    }
}

export default Constructor;