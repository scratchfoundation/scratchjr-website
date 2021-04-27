import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import ResourcesHomeSection from './resources/home.jsx';

const ResourcesSection = () => (
    <div>
        <Switch>
            <Route component={ResourcesHomeSection} />
        </Switch>
    </div>
);
ResourcesSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default ResourcesSection;
