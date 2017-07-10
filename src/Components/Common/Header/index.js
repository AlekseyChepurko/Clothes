/**
 * Created by Алексей on 07.07.2017.
 */

import React,{Component} from 'react'
import logoImg from  "./logo.png"
import MenuToggler from './MenuToggler'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import './main.css'

const Logo = ()=> <div styleName="logo__block_wrap order-first">
    <img src={logoImg} alt="Логотип"/>
    <p styleName="bold">logo</p>
    <p styleName="little">logo</p>
</div>;

class Header extends Component {
    render(){
        return <header styleName="common">
            <MenuToggler />
            <LeftMenu  />
            <Logo />
            <RightMenu />
        </header>
    }
}
export default Header;

