import React from 'react';
import PropTypes from 'prop-types';

const AssessmentsSection = props => (
    <div>
        {props.children}
    </div>
);
AssessmentsSection.propTypes = {
    children: PropTypes.node
};
export default AssessmentsSection;
