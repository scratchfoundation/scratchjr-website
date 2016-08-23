import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import NavBar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import TabNav from '../../components/tabnav/tabnav.jsx';

import InterfaceSection from './interface.jsx';
import PaintSection from './paint.jsx';
import BlocksSection from './blocks.jsx';
import TipsSection from './tips.jsx';

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
    <Router history={browserHistory}>
        <Route path='/learn' component={Learn}>
            <Route path='interface' component={InterfaceSection}/>
            <Route path='paint' component={PaintSection}/>
            <Route path='blocks' component={BlocksSection}/>
            <Route path='tips' component={TipsSection}/>
            <IndexRedirect to='interface'/>
        </Route>
    </Router>
), document.getElementById('app'));
