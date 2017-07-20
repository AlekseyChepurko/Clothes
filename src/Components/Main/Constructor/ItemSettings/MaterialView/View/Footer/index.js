/**
 * Created by Алексей on 08.07.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import expect from 'expect'
import _ from 'lodash'
import FooterPathItem from './FooterPathItem'
import items from 'Static/images/logos/res.json'
import {displayOrder} from 'Root/constants/ItemOptionsDisplayOrder'
import '../main.css'

class Footer extends Component {
    render() {
        const {activeItem, structure} = this.props;

        const pathToShow = _.find(structure, item => item.name === activeItem.name) ? _.find(structure, item => item.name === activeItem.name) : [];
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

function flattStructureObject(structureObject={}){
    return _.flatten([
        structureObject.parameters
            ?   [{
            name: structureObject.name,
            text: ''
        }]
            :   [],
        ...structureObject.subChoice
            ? structureObject.subChoice.map(item =>
                flattStructureObject(item)
            )
            :[]
    ])
}
function getPathByStructureObject(object){
    return sortByOrderArray(_.uniqBy(flattStructureObject(object), o=>o.name), displayOrder)
}
function sortByOrderArray(target=[],orderArray=displayOrder){
    return target.sort( (a,b) =>
        orderArray.indexOf(a.name) >= orderArray.indexOf(b.name) ? 1 : -1
    )
}
if(process.env.NODE_ENV !== 'production'){

    fetch(items).then(r=>r.json()).then(structureObject => {
        expect(getPathByStructureObject(structureObject[1])).toEqual([
            {
                name: 'look',
                text: ''
            },
            {
                name: 'fason',
                text: ''
            },
            {
                name: 'silhouette',
                text: ''
            },
            {
                name: 'lapel',
                text: ''
            },
            {
                name: 'edges',
                text: ''
            },
            {
                name: 'pockets',
                text: ''
            }
        ])
    })
}