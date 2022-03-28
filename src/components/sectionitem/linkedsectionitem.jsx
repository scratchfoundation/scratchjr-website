import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './sectionitem.scss';
import TxDiv from '../transifex/txdiv.jsx';

const LinkedSectionItem = ({
    children,
    description,
    format,
    linkText,
    linkURL,
    thumbnail,
    title,
    translateUrls
}) => {
    let thumb;
    const txContent = translateUrls ? 'translate_urls' : '';
    if (typeof thumbnail === 'string') {
        thumb = (
            <img
                className="content-section-item-thumbnail-image"
                src={thumbnail}
            />
        );
    } else {
        thumb = thumbnail;
    }
    return (
        <div className={`content-section-${format}-item`}>
            <Link to={linkURL}>
                <div className="content-section-item-title">
                    {title}
                </div>
            </Link>
            <Link to={linkURL}>
                <TxDiv
                    className="content-section-item-thumbnail"
                    txContent={txContent}
                >
                    {thumb}
                </TxDiv>
            </Link>
            <div className="content-section-item-description">
                {description || children}
                <Link to={linkURL}>
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

LinkedSectionItem.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    format: PropTypes.oneOf(['full', 'half']).isRequired,
    linkText: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
    thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    translateUrls: PropTypes.bool
};
LinkedSectionItem.defaultProps = {
    translateUrls: false
};
export default LinkedSectionItem;
