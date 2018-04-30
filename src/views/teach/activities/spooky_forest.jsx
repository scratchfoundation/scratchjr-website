import React from 'react';
import htmlContent from './spooky_forest.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const SpookyForestHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default SpookyForestHtml;
