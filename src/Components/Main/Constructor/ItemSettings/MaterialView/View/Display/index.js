/**
 * Created by Алексей on 14.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import MaterialItem from './MaterialItem'
import './main.css'

class Display extends Component {
    render() {
        const {activeType=1} = this.props;
        const {items} = require(`Static/images/materials/type${activeType}/res`);
        // TODO refactor this shiiiiiit
        return <section styleName="assHole">
            <section styleName="material__items-wrap">
                {items.map((item, key)=>
                    <MaterialItem
                        key={key}
                        path={`/static/images/materials/type${activeType}/`}
                        itemName={item}
                    />)}
            </section>

        </section>
    }
}

Display.defaultProps = {};

const mapStateToProps = (state)=>({
    activeType: state.Constructor.itemSelectMenu.activeItem.type
});
export default connect(mapStateToProps)(Display)