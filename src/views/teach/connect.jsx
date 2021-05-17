import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ConnectHomeSection from './connect/home.jsx';

const ConnectSection = () => (
    <div>
        <Switch>
            <Route component={ConnectHomeSection} />
        </Switch>
    </div>
);
export default ConnectSection;
