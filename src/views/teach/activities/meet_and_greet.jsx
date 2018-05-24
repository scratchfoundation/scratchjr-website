import React from 'react';
import htmlContent from './meet_and_greet.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';
import PrintButton from '../../../components/printbutton/printbutton.jsx';

const MeetAndGreetHtml = () => (
    <div>
        <div className="printbutton-container">
            <PrintButton />
        </div>
        <div dangerouslySetInnerHTML={{__html: htmlContent}} /> { /* eslint-disable-line react/no-danger */ }
    </div>
);
export default MeetAndGreetHtml;
