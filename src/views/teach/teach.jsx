import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';

import ActivitiesSection from './activities.jsx';
import CurriculaSection from './curricula.jsx';
import CurriculaHomeSection from './curricula/home.jsx';
import AnimatedGenresSection from './curricula/animatedgenres.jsx';
import PlaygroundSection from './curricula/playground.jsx';
import LitMathSection from './curricula/litmath.jsx';
import AssessmentsSection from './assessments.jsx';
import './teach.scss';

export default class Teach extends React.Component {
    render() {
        var tabs = [
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
                <NavBar selected="teach"/>
                <div id='content'>
                    <TabNav items={tabs}/>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}

render((
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path='/teach' component={Teach}>
            <Route path='activities' component={ActivitiesSection}/>
            <Route path='curricula' component={CurriculaSection}>
                <IndexRoute component={CurriculaHomeSection}/>
                <Route path='animated-genres' component={AnimatedGenresSection} />
                <Route path='playground' component={PlaygroundSection} />
                <Route path='literacy-math' component={LitMathSection} />
            </Route>
            <Route path='assessments' component={AssessmentsSection}/>
            <IndexRedirect to='activities'/>
        </Route>
    </Router>
), document.getElementById('app'));
