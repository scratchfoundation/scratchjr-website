import React from 'react';
import PropTypes from 'prop-types';
import './sectionitem.scss';
import TxDiv from '../transifex/txdiv.jsx';

const Section = ({
    children,
    description,
    id,
    title,
    translateUrls
}) => {
    const txContent = translateUrls ? 'translate_urls' : '';
    return (
        <TxDiv
            className="content-section content-subpage"
            id={id}
            txContent={txContent}
        >
            <div className="content-section-title">
                {title}
            </div>
            <div className="content-section-description">
                {description}
                {children}
            </div>

        </TxDiv>
    );
};
Section.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    translateUrls: PropTypes.bool
};
export default Section;
