/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './main.css'

class DropdownMenu extends Component {
    render(){
        const {menu, isOpen} = this.props;
        return <ul styleName={`menu-wrap hiding ${isOpen ? 'open' : 'close'}`}>
            {menu.map((item, key)=>
                <MenuItem item={item} key={key} />
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
        const {item} = this.props;
        return <li
            styleName="menu-item">
            <div onClick={this.toggleStatus}>{item.text}</div>
            {item.subItem
                ? <DropdownMenu
                    isOpen={this.state.isOpen}
                    menu={item.subItem}/>
                : null
            }
        </li>
    }
}

MenuItem.defaultProps = {
    item: {text: ''}
};

export default DropdownMenu

