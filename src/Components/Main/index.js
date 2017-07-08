/**
 * Created by Алексей on 07.07.2017.
 */
import React,{Component} from 'react'
import Common from 'Common'
import Mtm from './Constructor'
import './main.css'
import Constructor from "./Constructor/index";

class Main extends Component {
    render(){
        return(
        <Common>
            <section styleName="common">
                <Constructor />
            </section>
        </Common>
        )
    };
}

export default Main;