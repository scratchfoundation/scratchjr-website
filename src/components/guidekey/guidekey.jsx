import React from 'react';
import PropTypes from 'prop-types';
import './guidekey.scss';

const GuideKey = ({
    description,
    id,
    title
}) => (
    <div id="guide-key">
        <div id="key-header">
            {`${id} | ${title}`}
        </div>
        <div id="key-description">
            {description}
        </div>
    </div>
);

GuideKey.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};
export default GuideKey;
