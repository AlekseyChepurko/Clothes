/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import './main.css'

class Footer extends Component {
    render() {
        return <ul styleName="footer__wrap">
            {this.props.path.map((item, index)=>
                <li
                    style={{
                        color: item.active ? "#7a7a7a" : ""
                    }}
                    styleName="view_path__item"
                    key={index}>
                    {item.name}
                </li>
            )}
        </ul>
    }
}

Footer.defaultProps = {
    path: [{name: "model", active:true}, {name: "model"}, {name: "front pockets"}]
};

export default Footer