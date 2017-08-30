import React from 'react';
import htmlContent from './playground_games.html';
import ReactRouterPropTypes from 'react-router-prop-types';
import {ScrollIntoView} from 'rrc';

import '../full.css';
import '../../../../components/sectionitem/sectionitem.scss';

const PlaygroundHtml = ({location}) => (
    <ScrollIntoView id={location.hash}>
        {/* eslint-disable react/no-danger */}
        <div dangerouslySetInnerHTML={{__html: htmlContent}} />
        {/* eslint-enable react/no-danger */}
    </ScrollIntoView>
);
PlaygroundHtml.propTypes = {
    location: ReactRouterPropTypes.location.isRequired
};
export default PlaygroundHtml;
