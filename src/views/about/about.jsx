import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import InfoSection from './info.jsx';
import PressSection from './press.jsx';
import FAQSection from './faq.jsx';
import VideosSection from './videos.jsx';

import './about.scss';

const About = () => {
    const tabs = [
        {
            url: '/info',
            text: 'Info',
            section: 'info',
            indexLink: false
        }, {
            url: '/press',
            text: 'Press',
            section: 'press',
            indexLink: false
        }, {
            url: '/faq',
            text: 'FAQ',
            section: 'faq',
            indexLink: false
        }, {
            url: '/videos',
            text: 'Videos',
            section: 'videos',
            indexLink: false
        }

    ];
    return (
        <BrowserRouter basename="/about">
            <div>
                <NavBar selected="about" />
                <div id="content">
                    <TabNav items={tabs} />
                    <Switch>
                        <Redirect
                            exact
                            from="/"
                            to="/info"
                        />
                        <Route
                            path="/info"
                            component={InfoSection}
                        />
                        <Route
                            path="/press"
                            component={PressSection}
                        />
                        <Route
                            path="/faq"
                            component={FAQSection}
                        />
                        <Route
                            path="/videos"
                            component={VideosSection}
                        />
                        <Route
                            component={PageNotFound}
                        />
                    </Switch>
                    
                </div>
                <Footer />
            </div>
        </BrowserRouter>
        
    );
};

render(<About />, document.getElementById('app'));
