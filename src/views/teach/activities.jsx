import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import ActivitiesHomeSection from './activities/home.jsx';
import DriveAcrossTheCityHtml from './activities/drive_across_the_city.jsx';
import RunARaceHtml from './activities/run_a_race.jsx';
import SunsetHtml from './activities/sunset.jsx';
import MoonriseAfterSunsetHtml from './activities/moonrise_after_sunset.jsx';
import SpookyForestHtml from './activities/spooky_forest.jsx';
import DribbleABasketballHtml from './activities/dribble_a_basketball.jsx';
import DancePartyHtml from './activities/dance_party.jsx';
import MeetAndGreetHtml from './activities/meet_and_greet.jsx';
import ConversationHtml from './activities/conversation.jsx';

const ActivitiesSection = ({match}) => (
    <div>
        <header id="print-header">
            <img
                alt="ScratchJr logo"
                className="scratchjrlogo"
                src="/images/scratchjrlogo.png"
            />
        </header>
        <Switch>
            <Route
                path={`${match.url}/drive-across-the-city`}
                component={DriveAcrossTheCityHtml}
            />
            <Route
                path={`${match.url}/run-a-race`}
                component={RunARaceHtml}
            />
            <Route
                path={`${match.url}/sunset`}
                component={SunsetHtml}
            />
            <Route
                path={`${match.url}/moonrise-after-sunset`}
                component={MoonriseAfterSunsetHtml}
            />
            <Route
                path={`${match.url}/spooky-forest`}
                component={SpookyForestHtml}
            />
            <Route
                path={`${match.url}/dribble-a-basketball`}
                component={DribbleABasketballHtml}
            />
            <Route
                path={`${match.url}/dance-party`}
                component={DancePartyHtml}
            />
            <Route
                path={`${match.url}/meet-and-greet`}
                component={MeetAndGreetHtml}
            />
            <Route
                path={`${match.url}/conversation`}
                component={ConversationHtml}
            />
            <Route component={ActivitiesHomeSection} />
        </Switch>
    </div>
);
ActivitiesSection.propTypes = {
    match: ReactRouterPropTypes.match.isRequired
};
export default ActivitiesSection;
