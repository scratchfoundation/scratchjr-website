import React from 'react';
import htmlContent from './sunset.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const SunsetHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default SunsetHtml;
