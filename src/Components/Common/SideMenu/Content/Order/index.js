/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import Mtm from './Mtm'
import Rtw from './Rtw'
import './main.css'

class ModeSwitcher extends Component {
    render() {
        const {_this, tabs} = this.props;
        return <section styleName="order__modeSwitcher_wrap">
            {tabs.map((tab, index)=> <ModeItem _this={_this} tab={tab} key={index}/> )}
        </section>
    }
}

ModeSwitcher.defaultProps = {
    tabs: []
};

class ModeItem extends Component {
    render(){
        const {_this, tab} = this.props;
        return  <button
            styleName="order__modeSwitcher_item"
            onClick={()=>{_this.setState({activeTab: tab})}} >
            {tab.name}</button>
    }
}

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            activeTab: Mtm
        }
    }
    render() {
        return <section>
            <ModeSwitcher _this={this} tabs={[Mtm, Rtw]}/>
            {React.createElement(this.state.activeTab)}
        </section>
    }
}

Order.defaultProps = {};

export default Order