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
        itemName,
        activeItemParameter,
        chosenParameter,
        setItemParameterValue,
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
            { items.map( item => <Item
                setItemParameterValue={setItemParameterValue}
                itemName={itemName}
                activeItemParameter={activeItemParameter}
                parameterValue={item}
                parameterName={tabName}
                stylename={`menu__item-item ${item === chosenParameter ? "chosen" : ""}`}
                key={item}>{item}</Item>) }
        </ul>
    </li>
}
function Item(props){
    const {
        setItemParameterValue,
        activeItemParameter,
        itemName,
        parameterName,
        parameterValue
    } = props;

    const click = (e) => {
        e.preventDefault();
        if (activeItemParameter !== parameterName) return;
        setItemParameterValue({itemName, parameterName, parameterValue})
    };
    const mouseDown = (e) => {
        e.preventDefault();
    };
    return <li
        styleName={props.stylename}
        onClick={click}
        onMouseDown={mouseDown}
    >
        {props.children}
    </li>
}
TextMenuItem.defaultProps = {
    items: [],
    chosenParameter: "",
    tabName: "",
    active: false,
};

TextMenuItem.propTypes = {
    items: PropTypes.array,
    chosenParameter: PropTypes.string,
    tabName: PropTypes.string,
    active: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    itemName: state.Constructor.activeItem.name,
    activeItemParameter: state.Constructor.activeItem.parameter,
});

export default connect(mapStateToProps, {...actions})(TextMenuItem);