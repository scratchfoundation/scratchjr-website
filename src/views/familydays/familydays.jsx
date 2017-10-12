import React from 'react';
import {render} from 'react-dom';
import htmlContent from '../outreach/host/family-days.html';
import '../outreach/host/family-days.css';
import '../../components/sectionitem/sectionitem.scss';

const FamilyDays = () => (
    <div
        id="content"
        dangerouslySetInnerHTML={{__html: htmlContent}} // eslint-disable-line react/no-danger
    />
);

render(
    <FamilyDays />,
    document.getElementById('app'));
