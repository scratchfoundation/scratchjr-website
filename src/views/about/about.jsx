var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

var Tabber = require('../../components/tabber/tabber.jsx');
var Tab = require('../../components/tab/tab.jsx');
var TabNav = require('../../components/tabnav/tabnav.jsx');
var TabSectionNav = require('../../components/tabsectionnav/tabsectionnav.jsx');

var InfoSection = require('../../components/tab-sections/about-sections/info.jsx');
var PressSection = require('../../components/tab-sections/about-sections/press.jsx');
var FAQSection = require('../../components/tab-sections/about-sections/faq.jsx');
var VideosSection = require('../../components/tab-sections/about-sections/videos.jsx');

require('./about.scss');

var About = React.createClass({
	type: 'About',
	render: function() {
		return (
      <div>
        <NavBar selected="about"/>

        <Tabber>
          <TabNav>
            <Tab tabId="info" title="Info" iconClass="info-icon" />
            <Tab tabId="press" title="Press" iconClass="press-icon"/>
            <Tab tabId="faq" title="FAQ" iconClass="faq-icon" />
            <Tab tabId="videos" title="Videos" iconClass="videos-icon" />
          </TabNav>
          <TabSectionNav>
            <InfoSection />
            <PressSection />
            <FAQSection />
            <VideosSection />
          </TabSectionNav>
        </Tabber>
  
        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<About />, document.getElementById('app'));