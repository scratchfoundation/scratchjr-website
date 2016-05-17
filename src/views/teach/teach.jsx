var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

var Tabber = require('../../components/tabber/tabber.jsx');
var Tab = require('../../components/tab/tab.jsx');
var TabNav = require('../../components/tabnav/tabnav.jsx');
var TabSectionNav = require('../../components/tabsectionnav/tabsectionnav.jsx');

var ActivitiesSection = require('../../components/tab-sections/teach-sections/activities.jsx');
var CurriculaSection = require('../../components/tab-sections/teach-sections/curricula.jsx');
var AssessmentsSection = require('../../components/tab-sections/teach-sections/assessments.jsx');

require('./teach.scss');

var Teach = React.createClass({
	type: 'Teach',
	render: function() {
		return (
      <div>
        <NavBar selected="teach"/>

        <Tabber>
          <TabNav>
            <Tab tabId="activities" title="Activities" iconClass="activities-icon" />
            <Tab tabId="curricula" title="Curricula" iconClass="curricula-icon" subsections={['animated-genres', 'playground-curriculum', 'common-core-curriculum']} />
            <Tab tabId="assessments" title="Assessments" iconClass="assessment-icon" />
          </TabNav>
          <TabSectionNav>
            <ActivitiesSection />
            <CurriculaSection />
            <AssessmentsSection />
          </TabSectionNav>
        </Tabber>

        {/* Beginning of Activities Pages */}
        <div className="content-section" id="scratchjr-cards">
          <div className="content-section-title">
            ScratchJr Cards
          </div>
          {/* put scratch card html here */}
        </div>
        {/* End of Activities Pages */}

        {/* Beginning of Assessments Pages */}
        {/* End of Assessments Pages */}

        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<Teach />, document.getElementById('app'));