import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import ConnectHomeSection from './connect/home.jsx';

const ConnectSection = () => (
    <div>
        <Switch>
            <Route component={ConnectHomeSection} />
        </Switch>
    </div>
);
ConnectSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default ConnectSection;
