import React from 'react';
import htmlContent from './family-days.html';
import './family-days.css';
import '../../../components/sectionitem/sectionitem.scss';

const FamilyDays = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default FamilyDays;
