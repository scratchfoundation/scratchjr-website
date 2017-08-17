import React from 'react';
import PropTypes from 'prop-types';

const TipsSection = props => (
    <div>
        {props.children}
    </div>
);
TipsSection.propTypes = {
    children: PropTypes.node
};
export default TipsSection;
