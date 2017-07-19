/**
 * Created by chep on 19.07.17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FooterPathItem extends Component {
    render(){
        const {name, parameters, subChoice} = this.props;
        return <div>
            {parameters.length > 0 ? name : null}
            {
                subChoice.map( (item, key) =>
                   <FooterPathItem key={key} {...item}/>
                )

            }
        </div>
    }
}

FooterPathItem.defaultProps = {
        name: '',
        subChoice: [],
        parameters: []
};
FooterPathItem.propTypes = {
    name: PropTypes.string,
    subChoice: PropTypes.array,
    parameters: PropTypes.array,

};
export default FooterPathItem