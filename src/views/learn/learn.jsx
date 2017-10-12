import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import ScrollManager from '../../components/scrollmanager/scrollmanager.jsx';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import InterfaceSection from './interface.jsx';
import PaintSection from './paint.jsx';
import BlocksSection from './blocks.jsx';
import TipsSection from './tips.jsx';

import './learn.scss';

const Learn = () => {
    const tabs = [
        {
            url: '/interface',
            text: 'Interface Guide',
            section: 'interface',
            indexLink: false
        }, {
            url: '/paint',
            text: 'Paint Editor Guide',
            section: 'paint',
            indexLink: false
        }, {
            url: '/blocks',
            text: 'Block Descriptions',
            section: 'blocks',
            indexLink: false
        }, {
            url: '/tips',
            text: 'Tips & Hints',
            section: 'tips',
            indexLink: false
        }

    ];
    return (
        <BrowserRouter basename="/learn">
            <ScrollManager basename="/learn">
                <div>
                    <NavBar selected="learn" />
                    <div id="content">
                        <TabNav items={tabs} />
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to="/interface"
                            />
                            <Route
                                path="/interface"
                                component={InterfaceSection}
                            />
                            <Route
                                path="/paint"
                                component={PaintSection}
                            />
                            <Route
                                path="/blocks"
                                component={BlocksSection}
                            />
                            <Route
                                path="/tips"
                                component={TipsSection}
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

render(<Learn />, document.getElementById('app'));
