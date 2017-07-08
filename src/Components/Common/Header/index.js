/**
 * Created by Алексей on 07.07.2017.
 */

import React,{Component} from 'react'
// import logoImg from  "./logo.png"
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'


const Logo = ()=> <div>
    {/*<img src={logoImg} alt="Логотип"/>*/}
    <p>logo</p>
    <p>logo</p>
</div>;

class Header extends Component {
    render(){
        return <header>
            <LeftMenu/>
            <Logo/>
            <RightMenu/>
        </header>
    }
}
export default Header;

