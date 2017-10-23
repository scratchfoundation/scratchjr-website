import React from 'react';
import htmlContent from './reverse_engineering.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const ReverseEngineeringHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default ReverseEngineeringHtml;
