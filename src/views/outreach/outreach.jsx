import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import ScrollManager from '../../components/scrollmanager/scrollmanager.jsx';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import AboutSection from './about.jsx';
import HostSection from './host.jsx';
import NewsSection from './news.jsx';

import './outreach.scss';

const Outreach = () => {
    const tabs = [
        {
            url: '/about',
            text: 'About Family Days',
            section: 'about',
            indexLink: false
        }, {
            url: '/host',
            text: 'Host a Family Day',
            section: 'host',
            indexLink: false
        }, {
            url: '/news',
            text: 'Family Days News',
            section: 'news',
            indexLink: false
        }
    ];
    return (
        <BrowserRouter basename="/outreach">
            <ScrollManager basename="/outreach">
                <div>
                    <NavBar selected="outreach" />
                    <div id="content">
                        <TabNav items={tabs} />
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to="/about"
                            />
                            <Route
                                path="/about"
                                component={AboutSection}
                            />
                            <Route
                                path="/host"
                                component={HostSection}
                            />
                            <Route
                                path="/news"
                                component={NewsSection}
                            />
                            <Route
                                component={PageNotFound}
                            />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </ScrollManager>
        </BrowserRouter>
    );
};
render(<Outreach />, document.getElementById('app'));
