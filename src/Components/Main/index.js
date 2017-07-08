/**
 * Created by Алексей on 07.07.2017.
 */
import React,{Component} from 'react'
import Common from 'Common'
import Preview from './Preview'
import Constructor from "./Constructor";
import './main.css'

class Main extends Component {
    render(){
        return(
        <Common>
            <section styleName="common">
                <Constructor />
                <Preview/>
            </section>
        </Common>
        )
    };
}

export default Main;