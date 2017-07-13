/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {locale} from './locale'
import './main.css'

class Navigation extends Component {
    render() {
        const {chosenItems, activeItem, lang} = this.props;
        return <ul styleName="wrap">
            {chosenItems.map((item,index)=>
                <li styleName={`item${activeItem.name === item.name ?' active':''}`}
                    key={index}>
                        {locale[lang][item.name]}
                </li>)}
        </ul>
    }
}

Navigation.defaultProps = {
    chosenItems: [{name: 'trousers', active: true}, {name: 'jacket'}, {name:'coat'}]
};

const mapStateToProps = (state)=>({
    lang: state.language.lang,
    chosenItems: state.itemSelectMenu.addedItems,
    activeItem: state.itemSelectMenu.activeItem,
});
export default connect(mapStateToProps)(Navigation)