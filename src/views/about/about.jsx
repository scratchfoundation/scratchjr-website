import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router'
import NavBar from '../../components/navbar/navbar.jsx'
import Footer from '../../components/footer/footer.jsx'
import TabNav from '../../components/tabnav/tabnav.jsx'

import InfoSection from './info.jsx'
import PressSection from './press.jsx'
import FAQSection from './faq.jsx'
import VideosSection from './videos.jsx'

require('./about.scss');

var About = React.createClass({
    type: 'About',
    render: function() {
        var tabs = [
            {
                url: "/about/info",
                text: "Info",
                section: "info",
                indexLink: false
            }, {
                url: "/about/press",
                text: "Press",
                section: "press",
                indexLink: false
            }, {
                url: "/about/faq",
                text: "FAQ",
                section: "faq",
                indexLink: false
            }, {
                url: "/about/videos",
                text: "Videos",
                section: "videos",
                indexLink: false
            }

        ];
        return (
            <div>
                <NavBar selected="about"/>
                <div id="content">
                    <TabNav items={tabs}/> {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
});

render((
    <Router history={browserHistory}>
        <Route path="/about" component={About}>
            <Route path="info" component={InfoSection}/>
            <Route path="press" component={PressSection}/>
            <Route path="faq" component={FAQSection}/>
            <Route path="videos" component={VideosSection}/>
						<IndexRedirect to="info"/>
        </Route>
    </Router>
), document.getElementById('app'));
