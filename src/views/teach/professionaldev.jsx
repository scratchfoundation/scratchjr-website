import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProfessionalDevHomeSection from './professionaldev/home.jsx';

const ProfessionalDevSection = () => (
    <div>
        <Switch>
            <Route component={ProfessionalDevHomeSection} />
        </Switch>
    </div>
);
export default ProfessionalDevSection;
