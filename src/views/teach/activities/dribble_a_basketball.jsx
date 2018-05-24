import React from 'react';
import htmlContent from './dribble_a_basketball.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';
import PrintButton from '../../../components/printbutton/printbutton.jsx';

const DribbleABasketballHtml = () => (
    <div>
        <div className="printbutton-container">
            <PrintButton />
        </div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} /> { /* eslint-disable-line react/no-danger */ }
    </div>
);
export default DribbleABasketballHtml;
