/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {removeItem} from 'Root/actions/order'
import arrow from './arrow.png'
import deleteIcon from './deleteIcon.png'
import showIcon from './showIcon.png'
import './main.css'

let MenuItemControls = (props) => {
    const {removeAction, itemName} = props;
    const removeItem = (e) => {
        e.stopPropagation();
        removeAction(itemName);
    };
    return <div styleName="menu__item-controls">
        <div styleName="menu__item-control">
            <img
                onClick={removeItem}
                src={deleteIcon}
                alt="delete button image"/>
        </div>
        <div styleName="menu__item-control">
            <img src={showIcon} alt="show button image"/>
        </div>
        <div styleName="menu__item-control">
            <img src={arrow} alt="arrow control image"/>
        </div>
    </div>
};

class DropdownMenu extends Component {
    render(){
        const {menu, isOpen, removeItem} = this.props;
        return <ul styleName={`menu-wrap hiding ${isOpen ? 'open' : 'close'}`}>
            {menu.map((item, key)=>
                <MenuItem item={item} key={key} removeAction={removeItem}/>
            )}
        </ul>
    }
}

DropdownMenu.defaultProps = {
    menu: {},
    isOpen: true
};

DropdownMenu.propTypes = {
    menu: PropTypes.array,
};


class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggleStatus = this.toggleStatus.bind(this);
    }
    toggleStatus(){
        this.setState({isOpen: !this.state.isOpen});
    }
    render(){
        const {item, removeAction} = this.props;
        return <li
            styleName="menu__item-wrap">
            <div onClick={this.toggleStatus} styleName="menu__item">
                <p>{item.name}</p>
                {item.parameters
                    ? <MenuItemControls itemName={item.name} removeAction={removeAction} />
                    : null
                }
            </div>
            {item.parameters
                ? <DropdownMenu
                    isOpen={this.state.isOpen}
                    menu={item.parameters}/>
                : null
            }
        </li>
    }
}

MenuItem.defaultProps = {
    item: {name: ''}
};

export default connect(()=>({}), {removeItem})(DropdownMenu)

