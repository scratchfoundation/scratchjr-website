import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ResourcesHomeSection from './resources/home.jsx';

const ResourcesSection = () => (
    <div>
        <Switch>
            <Route component={ResourcesHomeSection} />
        </Switch>
    </div>
);
export default ResourcesSection;
