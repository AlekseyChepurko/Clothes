/**
 * Created by Алексей on 09.07.2017.
 */

import {combineReducers} from 'redux'
import sideMenu from './SideMenu'
import language from './Language'
import itemSelectMenu from './itemSelectMenu'

export default combineReducers({
    sideMenu,
    language,
    itemSelectMenu
})