import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import FamilyDays from './host/familydays.jsx';
import HostHome from './host/home.jsx';

const HostSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/family-days`}
                component={FamilyDays}
            />
            <Route component={HostHome} />
        </Switch>
    </div>
);
HostSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};

export default HostSection;
