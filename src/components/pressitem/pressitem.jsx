import React from 'react';
import PropTypes from 'prop-types';

const PressItem = ({
    dateString,
    source,
    title,
    url
}) => (
    <div className="content-description-answer">
        <a href={url}>
            {title}
        </a>{' - '}
        {source}. {dateString}
    </div>
);

PressItem.propTypes = {
    dateString: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default PressItem;
