import React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
    browserHistory,
    IndexRedirect,
    IndexRoute,
    applyRouterMiddleware
} from 'react-router';
import {useScroll} from 'react-router-scroll';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';
import PageNotFound from '../../components/pagenotfound/pagenotfound.jsx';

import InterfaceSection from './interface.jsx';
import PaintSection from './paint.jsx';
import BlocksSection from './blocks.jsx';
import TipsSection from './tips.jsx';
import TipsHome from './tips/tipshome.jsx';
import ManageSection from './tips/manage.jsx';
import AnimationSection from './tips/animation.jsx';
import MultiCharacterSection from './tips/multicharacter.jsx';
import TriggersSection from './tips/triggers.jsx';
import ShareSection from './tips/share.jsx';
import SamplesSection from './tips/samples.jsx';
import CopyScriptSection from './tips/copyscripts.jsx';
import PagesSection from './tips/pages.jsx';

import './learn.scss';

export default class Learn extends React.Component {
    render () {
        const tabs = [
            {
                url: '/learn/interface',
                text: 'Interface Guide',
                section: 'interface',
                indexLink: false
            }, {
                url: '/learn/paint',
                text: 'Paint Editor Guide',
                section: 'paint',
                indexLink: false
            }, {
                url: '/learn/blocks',
                text: 'Block Descriptions',
                section: 'blocks',
                indexLink: false
            }, {
                url: '/learn/tips',
                text: 'Tips & Hints',
                section: 'tips',
                indexLink: false
            }

        ];
        return (
            <div>
                <NavBar selected="learn" />
                <div id="content">
                    <TabNav items={tabs} /> {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
Learn.propTypes = {
    children: React.PropTypes.node
};

render((
    <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
    >
        <Route
            component={Learn}
            path="/learn"
        >
            <Route
                component={InterfaceSection}
                path="interface"
            />
            <Route
                component={PaintSection}
                path="paint"
            />
            <Route
                component={BlocksSection}
                path="blocks"
            />
            <Route
                component={TipsSection}
                path="tips"
            >
                <IndexRoute component={TipsHome} />
                <Route
                    component={ManageSection}
                    path="manage-projects"
                />
                <Route
                    component={AnimationSection}
                    path="character-animation"
                />
                <Route
                    component={MultiCharacterSection}
                    path="multi-character"
                />
                <Route
                    component={TriggersSection}
                    path="trigger-blocks"
                />
                <Route
                    component={ShareSection}
                    path="share-projects"
                />
                <Route
                    component={SamplesSection}
                    path="sample-projects"
                />
                <Route
                    component={CopyScriptSection}
                    path="copy-scripts"
                />
                <Route
                    component={PagesSection}
                    path="pages"
                />
            </Route>
            <IndexRedirect to="interface" />
            <Route
                component={PageNotFound}
                path="*"
            />
        </Route>
    </Router>
), document.getElementById('app'));
