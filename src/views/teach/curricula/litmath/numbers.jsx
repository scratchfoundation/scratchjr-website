import React from 'react';
import htmlContent from './numbers.html';

import '../../print.css';
import '../../../../components/sectionitem/sectionitem.scss';

const NumbersHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);

export default NumbersHtml;
