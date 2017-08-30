import React from 'react';
import htmlContent from './naming_letters_part1.html';

import '../full.css';
import '../../../../components/sectionitem/sectionitem.scss';

const Letters1Html = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);

export default Letters1Html;
