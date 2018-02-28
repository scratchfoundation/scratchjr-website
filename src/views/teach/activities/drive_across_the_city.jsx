import React from 'react';
import htmlContent from './drive_across_the_city.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const DriveAcrossTheCityHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default DriveAcrossTheCityHtml;
