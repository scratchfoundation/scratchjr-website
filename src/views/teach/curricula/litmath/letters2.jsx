import React from 'react';
import htmlContent from './naming_letters_part2.html';

import '../../print.css';
import '../../../../components/sectionitem/sectionitem.scss';

const Letters2Html = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);

export default Letters2Html;
