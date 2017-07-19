/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import FooterPathItem from './FooterPathItem'
import '../main.css'

class Footer extends Component {
    render() {
        const {activeItem, structure} = this.props;

        const pathToShow = _.find(structure, item => item.name === activeItem.name) ? _.find(structure, item => item.name === activeItem.name) : [];
        console.log(pathToShow);
        return <ul styleName="footer__wrap">
            <FooterPathItem {...pathToShow}/>
             {/*{this.props.path.map((item, index)=>*/}
                {/*<li*/}
                    {/*style={{*/}
                        {/*color: item.active ? "#7a7a7a" : ""*/}
                    {/*}}*/}
                    {/*styleName="view_path__item"*/}
                    {/*key={index}>*/}
                    {/*{item.name}*/}
                {/*</li>*/}
            {/*)}*/}
        </ul>
    }
}

Footer.defaultProps = {
    activeItem: {},
    structure: []
};

const mapStateToProps = state => ({
    activeItem: state.Constructor.itemSelectMenu.activeItem,
    structure: state.orderStrucrure
});
export default connect(mapStateToProps, {})(Footer)