import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import PlaygroundHtml from './playground/full.jsx';
import PlaygroundHome from './playground/home.jsx';

const PlaygroundSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/full`}
                component={PlaygroundHtml}
            />
            <Route component={PlaygroundHome} />
        </Switch>
    </div>
);
PlaygroundSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default PlaygroundSection;
