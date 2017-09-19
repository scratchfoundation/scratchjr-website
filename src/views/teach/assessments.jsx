import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import AssessmentsHomeSection from './assessments/home.jsx';
import SolveitSection from './assessments/solveit.jsx';
import AnswerSheetHtml from './assessments/answersheet.jsx';
import ReverseEngineeringHtml from './assessments/reverseengineering.jsx';

const AssessmentsSection = ({match}) => (
    <div>
        <Switch>
            <Route
                exact
                path={`${match.url}/solveit`}
                component={SolveitSection}
            />
            <Route
                path={`${match.url}/solveit/answersheet`}
                component={AnswerSheetHtml}
            />
            <Route
                path={`${match.url}/reverse-engineering`}
                component={ReverseEngineeringHtml}
            />
            <Route component={AssessmentsHomeSection} />
        </Switch>
    </div>
);
AssessmentsSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default AssessmentsSection;
