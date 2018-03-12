import React from 'react';
import htmlContent from './dance_party.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const DancePartyHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default DancePartyHtml;
