import PropTypes from 'prop-types';
import React from 'react';

const BlockItem = ({
    description,
    image,
    imageClass,
    title
}) => (
    <div className="block-wrapper">
        <div className="block-title">
            {title}
        </div>
        <div className="block-image-wrapper">
            <img
                className={imageClass}
                src={image}
            />
        </div>
        <div className="block-description">
            {description}
        </div>
    </div>
);

BlockItem.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageClass: PropTypes.string,
    title: PropTypes.string.isRequired
};
BlockItem.defaultProps = {imageClass: 'block-image'};
export default BlockItem;
