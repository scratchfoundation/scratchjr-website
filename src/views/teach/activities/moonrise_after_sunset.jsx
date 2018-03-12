import React from 'react';
import htmlContent from './moonrise_after_sunset.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const MoonriseAfterSunsetHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default MoonriseAfterSunsetHtml;
