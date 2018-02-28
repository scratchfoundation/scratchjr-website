import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import ScrollManager from '../../components/scrollmanager/scrollmanager.jsx';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import ActivitiesSection from './activities.jsx';
import CurriculaSection from './curricula.jsx';
import AssessmentsSection from './assessments.jsx';
import './teach.scss';

const Teach = () => {
    const tabs = [
        {
            url: '/activities',
            text: 'Activities',
            section: 'activities',
            indexLink: false
        }, {
            url: '/curricula',
            text: 'Curricula',
            section: 'curricula',
            indexLink: false
        }, {
            url: '/assessments',
            text: 'Assessments',
            section: 'assessments',
            indexLink: false
        }
    ];
    return (
        <BrowserRouter basename="/teach">
            <ScrollManager basename="/teach">
                <div>
                    <NavBar selected="teach" />
                    
                    <div id="content">
                        <TabNav items={tabs} />
                        <Switch>
                            <Redirect
                                exact
                                from="/"
                                to="/activities"
                            />
                            <Route
                                path="/activities"
                                component={ActivitiesSection}
                            />
                            <Route
                                path="/curricula"
                                component={CurriculaSection}
                            />
                            <Route
                                path="/assessments"
                                component={AssessmentsSection}
                            />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                    <Footer />
                    <footer id="print-footer">
                        <img
                            alt="Creative commons logo"
                            className="cc-logo"
                            src="/images/cc-logo.png"
                        />
                        <div className="footer-text">
                            Created by the Developmental Technologies Research Group at Tufts University<br />
                            This work is licensed under a Creative Commons Attribution-ShareAlike 4.0
                            International License.
                        </div>
                        <img
                            alt="DevTech logo"
                            className="devtech-logo"
                            src="/images/DevTechLogo.png"
                        />
                    </footer>
                </div>
            </ScrollManager>
        </BrowserRouter>
        
    );
};

render(<Teach />, document.getElementById('app'));
