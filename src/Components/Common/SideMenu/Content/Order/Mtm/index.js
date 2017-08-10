/**
 * Created by Алексей on 09.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import DropdownMenu from 'Common/DropdownMenu'
import './main.css'

class Mtm extends Component {
    render() {
        return <DropdownMenu menu={this.props.order} />
    }
}

Mtm.defaultProps = {
    lang: 'en'
};

const mapStateToProps = (state) => ({
    lang: state.language.lang,
    order: state.order
});

export default connect(mapStateToProps)(Mtm)