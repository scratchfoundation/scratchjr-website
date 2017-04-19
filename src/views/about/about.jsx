import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import InfoSection from './info.jsx';
import PressSection from './press.jsx';
import FAQSection from './faq.jsx';
import VideosSection from './videos.jsx';

import './about.scss';

export default class About extends React.Component {
    render () {
        const tabs = [
            {
                url: '/about/info',
                text: 'Info',
                section: 'info',
                indexLink: false
            }, {
                url: '/about/press',
                text: 'Press',
                section: 'press',
                indexLink: false
            }, {
                url: '/about/faq',
                text: 'FAQ',
                section: 'faq',
                indexLink: false
            }, {
                url: '/about/videos',
                text: 'Videos',
                section: 'videos',
                indexLink: false
            }

        ];
        return (
            <div>
                <NavBar selected="about" />
                <div id="content">
                    <TabNav items={tabs} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
About.propTypes = {
    children: React.PropTypes.node
};

render((
    <Router history={browserHistory}>
        <Route
            component={About}
            path="/about"
        >
            <Route
                component={InfoSection}
                path="info"
            />
            <Route
                component={PressSection}
                path="press"
            />
            <Route
                component={FAQSection}
                path="faq"
            />
            <Route
                component={VideosSection}
                path="videos"
            />
            <IndexRedirect to="info" />
            <Route
                component={PageNotFound}
                path="*"
            />
        </Route>
    </Router>
), document.getElementById('app'));
