import React from 'react';
import htmlContent from './conversation.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const ConversationHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default ConversationHtml;
