import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import AssessmentsHomeSection from './assessments/home.jsx';
import SolveitSection from './assessments/solveit.jsx';

const AssessmentsSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/solveit`}
                component={SolveitSection}
            />
            <Route component={AssessmentsHomeSection} />
        </Switch>
    </div>
);
AssessmentsSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default AssessmentsSection;
