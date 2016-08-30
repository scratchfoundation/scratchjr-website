import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';

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
        var tabs = [
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
        <NavBar selected="learn"/>
            <div id='content'>
                <TabNav items={tabs}/>
                {this.props.children}
            </div>
        <Footer />
      </div>
		);
	}
}

render((
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
        <Route path='/learn' component={Learn}>
            <Route path='interface' component={InterfaceSection}/>
            <Route path='paint' component={PaintSection}/>
            <Route path='blocks' component={BlocksSection}/>
            <Route path='tips' component={TipsSection}>
                <IndexRoute component={TipsHome}/>
                <Route path='manage-projects' component={ManageSection}/>
                <Route path='character-animation' component={AnimationSection}/>
                <Route path='multi-character' component={MultiCharacterSection}/>
                <Route path='trigger-blocks' component={TriggersSection}/>
                <Route path='share-projects' component={ShareSection}/>
                <Route path='sample-projects' component={SamplesSection}/>
                <Route path='copy-scripts' component={CopyScriptSection}/>
                <Route path='pages' component={PagesSection}/>
            </Route>
            <IndexRedirect to='interface'/>
        </Route>
    </Router>
), document.getElementById('app'));
