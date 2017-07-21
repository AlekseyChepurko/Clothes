/**
 * Created by Алексей on 09.07.2017.
 */

import {combineReducers} from 'redux'
import sideMenu from './SideMenu'
import language from './Language'
import Constructor from './Constructor'
import order from './order'
import orderStructure from './orderStructure'
import parametersDependencies from './parametersDependencies'

export default combineReducers({
    sideMenu,
    language,
    Constructor,
    order,
    orderStructure,
    parametersDependencies
})