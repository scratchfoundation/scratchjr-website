import React from 'react';
import htmlContent from './drive_across_the_city.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';
import PrintButton from '../../../components/printbutton/printbutton.jsx';

const DriveAcrossTheCityHtml = () => (
    <div>
        <div className="printbutton-container">
            <PrintButton />
        </div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} /> { /* eslint-disable-line react/no-danger */ }
    </div>
);
export default DriveAcrossTheCityHtml;
