import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import CurriculaHomeSection from './curricula/home.jsx';
import AnimatedGenresSection from './curricula/animatedgenres.jsx';
import PlaygroundSection from './curricula/playground.jsx';
import LitMathSection from './curricula/litmath.jsx';

const CurriculaSection = ({match}) => (
    <div>
        <Switch>
            <Route
                path={`${match.url}/animated-genres`}
                component={AnimatedGenresSection}
            />
            <Route
                path={`${match.url}/playground`}
                component={PlaygroundSection}
            />
            <Route
                path={`${match.url}/literacy-math`}
                component={LitMathSection}
            />
            <Route component={CurriculaHomeSection} />
        </Switch>
    </div>
);
CurriculaSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default CurriculaSection;
