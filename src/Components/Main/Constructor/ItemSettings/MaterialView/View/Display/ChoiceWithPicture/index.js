import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './main.css'

class ChoiceWithPicture extends Component {
    render() {
        const {items} = this.props;
        return <ul styleName='display__wrapper'>
            {
                Object.keys(items)
                    .map(key => <ChoiceItem
                        key={key}
                        imageName={key}
                        image={items[key]}
                    />)
            }
        </ul>
    }
}

ChoiceWithPicture.defaultProps = {
    items: {}
};

ChoiceWithPicture.propTypes = {
    items: PropTypes.object
};

export default ChoiceWithPicture


function ChoiceItem({image, imageName}){
    return <li styleName="display__item-wrap">
        <img
            styleName="display__item-image"
            src={image}
            alt={imageName}/>
    </li>
}

ChoiceItem.defaultProps = {
    image: '',
    imageName: ''
};
ChoiceItem.propTypes = {
    image: PropTypes.string,
    imageName: PropTypes.string
};