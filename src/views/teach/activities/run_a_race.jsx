import React from 'react';
import htmlContent from './run_a_race.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';
import PrintButton from '../../../components/printbutton/printbutton.jsx';

const RunARaceHtml = () => (
    <div>
        <div className="printbutton-container">
            <PrintButton />
        </div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} /> { /* eslint-disable-line react/no-danger */ }
    </div>
);
export default RunARaceHtml;
