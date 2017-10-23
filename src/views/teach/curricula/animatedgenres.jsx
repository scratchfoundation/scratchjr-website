import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import AnimatedGenresHtml from './animatedgenres/full.jsx';
import AnimatedGenresHome from './animatedgenres/home.jsx';

const AnimatedGenresSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/full`}
                component={AnimatedGenresHtml}
            />
            <Route component={AnimatedGenresHome} />
        </Switch>
    </div>
);
AnimatedGenresSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default AnimatedGenresSection;
