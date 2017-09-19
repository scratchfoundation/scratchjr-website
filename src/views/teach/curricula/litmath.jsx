import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import Letters1Html from './litmath/letters1.jsx';
import Letters2Html from './litmath/letters2.jsx';
import NumbersHtml from './litmath/numbers.jsx';
import LitMathHome from './litmath/home.jsx';

const PlaygroundSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/letters-pt1`}
                component={Letters1Html}
            />
            <Route
                path={`${match.url}/letters-pt2`}
                component={Letters2Html}
            />
            <Route
                path={`${match.url}/numbers`}
                component={NumbersHtml}
            />
            <Route component={LitMathHome} />
        </Switch>
    </div>
);
PlaygroundSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default PlaygroundSection;
