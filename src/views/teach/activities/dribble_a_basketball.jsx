import React from 'react';
import htmlContent from './dribble_a_basketball.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const DribbleABasketballHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default DribbleABasketballHtml;
