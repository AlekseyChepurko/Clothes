/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'

class LeftMenu extends Component {
    render(){
        return <section>
            <p>order</p>
            <p>dashboard</p>
            <p>ed {this.props.ed}</p>
        </section>
    }
}

LeftMenu.defaultProps = {
    ed: "18.08.2017"
};

export default LeftMenu;