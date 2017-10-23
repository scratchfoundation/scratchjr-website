import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import TipsHome from './tips/tipshome.jsx';
import ManageSection from './tips/manage.jsx';
import AnimationSection from './tips/animation.jsx';
import MultiCharacterSection from './tips/multicharacter.jsx';
import TriggersSection from './tips/triggers.jsx';
import ShareSection from './tips/share.jsx';
import SamplesSection from './tips/samples.jsx';
import CopyScriptSection from './tips/copyscripts.jsx';
import PagesSection from './tips/pages.jsx';
const TipsSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/manage-projects`}
                component={ManageSection}
            />
            <Route
                path={`${match.url}/character-animation`}
                component={AnimationSection}
            />
            <Route
                path={`${match.url}/multi-character`}
                component={MultiCharacterSection}
            />
            <Route
                path={`${match.url}/trigger-blocks`}
                component={TriggersSection}
            />
            <Route
                path={`${match.url}/share-projects`}
                component={ShareSection}
            />
            <Route
                path={`${match.url}/sample-projects`}
                component={SamplesSection}
            />
            <Route
                path={`${match.url}/copy-scripts`}
                component={CopyScriptSection}
            />
            <Route
                path={`${match.url}/pages`}
                component={PagesSection}
            />
            <Route component={TipsHome} />
        </Switch>
        
        
    </div>
);
TipsSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};

export default TipsSection;
