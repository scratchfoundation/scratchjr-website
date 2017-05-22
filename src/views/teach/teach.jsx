import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import ActivitiesSection from './activities.jsx';
import CurriculaSection from './curricula.jsx';
import CurriculaHomeSection from './curricula/home.jsx';
import AnimatedGenresSection from './curricula/animatedgenres.jsx';
import PlaygroundSection from './curricula/playground.jsx';
import LitMathSection from './curricula/litmath.jsx';
import AssessmentsSection from './assessments.jsx';
import AssessmentsHomeSection from './assessments/home.jsx';
import SolveitSection from './assessments/solveit.jsx';
import './teach.scss';

export default class Teach extends React.Component {
    render () {
        const tabs = [
            {
                url: '/teach/activities',
                text: 'Activities',
                section: 'activities',
                indexLink: false
            }, {
                url: '/teach/curricula',
                text: 'Curricula',
                section: 'curricula',
                indexLink: false
            }, {
                url: '/teach/assessments',
                text: 'Assessments',
                section: 'assessments',
                indexLink: false
            }
        ];
        return (
            <div>
                <NavBar selected="teach" />
                <div id="content">
                    <TabNav items={tabs} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
Teach.propTypes = {
    children: React.PropTypes.node
};

render((
    <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
    >
        <Route
            component={Teach}
            path="/teach"
        >
            <Route
                component={ActivitiesSection}
                path="activities"
            />
            <Route
                component={CurriculaSection}
                path="curricula"
            >
                <IndexRoute component={CurriculaHomeSection} />
                <Route
                    component={AnimatedGenresSection}
                    path="animated-genres"
                />
                <Route
                    component={PlaygroundSection}
                    path="playground"
                />
                <Route
                    component={LitMathSection}
                    path="literacy-math"
                />
            </Route>
            <Route
                component={AssessmentsSection}
                path="assessments"
            >
                <IndexRoute component={AssessmentsHomeSection} />
                <Route
                    component={SolveitSection}
                    path="solveit"
                />
            </Route>
            <IndexRedirect to="activities" />
            <Route
                component={PageNotFound}
                path="*"
            />
        </Route>
    </Router>
), document.getElementById('app'));
