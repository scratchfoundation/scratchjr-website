import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CurriculumHomeSection from './curriculum/home.jsx';

const CurriculumSection = () => (
    <div>
        <Switch>
            <Route component={CurriculumHomeSection} />
        </Switch>
    </div>
);
export default CurriculumSection;
