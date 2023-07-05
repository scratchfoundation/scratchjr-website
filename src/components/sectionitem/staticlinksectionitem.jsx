import React from 'react';
import PropTypes from 'prop-types';
import './sectionitem.scss';
import TxDiv from '../transifex/txdiv.jsx';

const StaticLinkSectionItem = ({
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
        thumb = (<img
            className="content-section-item-thumbnail-image"
            src={thumbnail}
        />);
    } else {
        thumb = thumbnail;
    }
    return (
        <TxDiv
            className={`content-section-${format}-item`}
            txContent={txContent}
        >
            <a
                href={linkURL}
                rel="noopener noreferrer"
                target="_blank"
            >
                <div className="content-section-item-title">
                    {title}
                </div>
            </a>
            <a
                href={linkURL}
                rel="noopener noreferrer"
                target="_blank"
            >
                <div className="content-section-item-thumbnail">
                    {thumb}
                </div>
            </a>
            <div className="content-section-item-description">
                {description || children} &nbsp;
                <a
                    href={linkURL}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {linkText}
                </a>
            </div>
        </TxDiv>
    );
};

StaticLinkSectionItem.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    format: PropTypes.oneOf(['full', 'half']).isRequired,
    linkText: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
    thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    translateUrls: PropTypes.bool
};
export default StaticLinkSectionItem;
