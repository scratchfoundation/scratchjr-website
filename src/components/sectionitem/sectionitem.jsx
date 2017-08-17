import React from 'react';
import PropTypes from 'prop-types';
import './sectionitem.scss';

const SectionItem = ({
    children,
    description,
    format,
    thumbnail,
    title
}) => {
    let thumb;
    if (typeof thumbnail === 'string') {
        thumb = (<img
            className="content-section-item-thumbnail-image"
            src={thumbnail}
        />);
    } else {
        thumb = thumbnail;
    }
    return (
        <div className={`content-section-${format}-item`}>
            <div className="content-section-item-title">
                {title}
            </div>
            <div className="content-section-item-thumbnail">
                {thumb}
            </div>
            <div className="content-section-item-description">
                {description || children}
            </div>
        </div>
    );
};

SectionItem.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    format: PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired
};
export default SectionItem;
