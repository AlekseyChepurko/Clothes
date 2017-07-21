/**
 * Created by Алексей on 08.07.2017.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actions} from 'Root/actions'
import Navigation from './Navigation'
import View from './View'
import './main.css'

class MaterialView extends Component {
    render(){
        const {items,activeItem, lang, itemSelectMenuIsOpen, setActiveItem} = this.props;
        return <section styleName="wrap">
            <Navigation
                {...{
                    items,
                    lang,
                    activeValue: activeItem.name,
                    itemSelectMenuIsOpen,
                    setActiveItem
                }}
            />
            <View/>
        </section>
    }
}


const mapStateToProps = state => ({
    itemSelectMenuIsOpen: state.Constructor.itemSelectMenu.isOpenAfterAnimation,
    lang: state.language.lang,
    items: state.order,
    activeItem: state.Constructor.activeItem,
});
export default connect(mapStateToProps, {...actions})(MaterialView)