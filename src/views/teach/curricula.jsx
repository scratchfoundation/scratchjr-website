import React from 'react';
import PropTypes from 'prop-types';

const CurriculaSection = props => (
    <div>
        {props.children}
    </div>
);
CurriculaSection.propTypes = {
    children: PropTypes.node
};
export default CurriculaSection;
