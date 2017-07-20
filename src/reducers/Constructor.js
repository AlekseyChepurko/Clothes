/**
 * Created by Алексей on 15.07.2017.
 */

import {combineReducers} from 'redux'
import itemSelectMenu from './itemSelectMenu'
import activeItem from './ActiveItem'

const Constructor = combineReducers({
    activeItem,
    itemSelectMenu
});

export default Constructor;