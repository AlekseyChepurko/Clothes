/**
 * Created by Алексей on 11.08.2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {actions} from 'Root/actions'
import PropTypes from 'prop-types';
import "./index.css";

function TextMenuItem(props) {
    const {
        items,
        tabName, 
        active} = props;
    const click = () => () => {
        props.setActiveItemParameter(tabName);
    };
    return <li
        onClick={click()}
        styleName={`menu__item-wrap ${active ? "active" : ""}`}>
        <div styleName="menu__item-tabName">
            {tabName}
        </div>
        <ul
            styleName={`menu__item-choices ${active ? "active" : ""}`}>
            { items.map( item => <li
                styleName="menu__item-item"
                key={item}>{item}</li>) }
        </ul>
    </li>
}

TextMenuItem.defaultProps = {
    items: [],
    tabName: "",
    active: false,
};

TextMenuItem.propTypes = {
    items: PropTypes.array,
    tabName: PropTypes.string,
    active: PropTypes.bool,
};

export default connect(()=>({}), {...actions})(TextMenuItem);