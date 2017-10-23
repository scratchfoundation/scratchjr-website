import React from 'react';
import PropTypes from 'prop-types';
import './guidebuttonline.scss';

const GuideButtonLine = ({
    id,
    type
}) => {
    let lineClass = 'guide-vertical-line';
    if (type === 'dot') {
        lineClass = 'guide-dot';
    } else if (type === 'horizontal') {
        lineClass = 'guide-horizontal-line';
    }
    return (
        <div
            className={lineClass}
            id={id}
        />
    );
};

GuideButtonLine.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['dot', 'vertical', 'horizontal']).isRequired
};
export default GuideButtonLine;
