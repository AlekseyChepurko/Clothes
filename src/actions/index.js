/**
 * Created by Алексей on 09.07.2017.
 */
import * as acts from '../constants/ActionTypes'
import * as ord from './order'
import * as sideMenu from './sideMenu'
import * as itemSelectMenu from './itemSelectMenu'

// Language
const changeLanguage = (lang) =>({
    type: acts.CHANGE_LANGUAGE,
    lang
});

export const actions = {
    ...ord,
    ...sideMenu,
    ...itemSelectMenu,
    changeLanguage
};