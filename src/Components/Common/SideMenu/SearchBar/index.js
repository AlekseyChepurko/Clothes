/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

const locale = {
    en: 'Search',
    ru: 'Поиск'
};

class SearchBar extends Component {
    render() {
        return <input
            placeholder={`${locale[this.props.lang]}...`}
            styleName="menu__search-input"
            type="text"/>
    }
}

SearchBar.defaultProps = {
    lang: 'en'
};

export default SearchBar