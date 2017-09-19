import React from 'react';
import htmlContent from './student_answer_sheet.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const AnswerSheetHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default AnswerSheetHtml;
