/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {actions} from 'Root/actions'
import Mtm from './Content/Mtm'
import Rtw from './Content/Rtw'
import './main.css'
import HideButton from "./HideButton/index";

class Item  extends Component{
    render(){
        const {name, active, onClick} = this.props;
        return <button
            style={{color: name===active ? "#8f7548": null}}
            styleName={`constructor__choice`}
            onClick={()=>{
                onClick(name)}
            }
        >{name}</button>
    }
}

class ItemSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: "mtm",
        };
        this.changeActive = this.changeActive.bind(this);
    };
    componentDidMount(){
        // TODO replace to the select menu component
        ReactDOM.findDOMNode(this).addEventListener("transitionend",(e)=>{
            e.stopImmediatePropagation();
            if (e.target.parentNode === ReactDOM.findDOMNode(this)){
                this.props.toggleIsOpenAfterAnimation();
            }
        });
    }

    changeActive(active){
        this.setState({
            activeTab: active
        });
    };
    render(){
        const {isOpen,sideMenuIsOpen} = this.props;
        return <section styleName="common">
            {sideMenuIsOpen ? null : <HideButton />}
            <section styleName={`hiding ${isOpen && !sideMenuIsOpen ? '' : 'closed'}`}>
                <section styleName={`settings__block_wrap`}>
                    <section styleName="constructor__choice-wrap">
                        <Item name="mtm" active={this.state.activeTab} onClick={this.changeActive}/>
                        <Item name="rtw" active={this.state.activeTab} onClick={this.changeActive} />
                    </section>
                    <section>
                        {this.state.activeTab === "mtm"
                            ? <Mtm />
                            : <Rtw />
                        }
                    </section>
                </section>
            </section>
        </section>
    }
}

const mapStateToProps = (state)=>({
    isOpen: state.Constructor.itemSelectMenu.isOpen,
});

export default connect(mapStateToProps, {...actions})(ItemSelect);