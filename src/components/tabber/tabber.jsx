import React from 'react';

var Tabber = React.createClass({
  getInitialState: function() {
    var tabs = {};
    var tabOrder = {};
    var tabnav = React.Children.toArray(this.props.children)[0]; // get TabNav component
    React.Children.forEach(
      tabnav.props.children,
      function (child, i) {
        tabs[child.props.tabId] = child.props.subsections; // get tabId's
        tabOrder[child.props.tabId] = i;
      }
    );
    var hash = location.hash.substr(1); // get hash from URL if it exists
    var initialIndex = 0;
    var activeSubsection = null;
    if (hash) {
      if (hash in tabs) {
        initialIndex = tabOrder[hash]; // set initial index of tabber corresponding to URL hash
      } else {
        for (var tab in tabs) { 
          if (tabs[tab] && tabs[tab].indexOf(hash) >= 0) {
            initialIndex = tabOrder[tab]; // set initial index to tab that holds the subsection corresponding to URL hash
            activeSubsection = hash;
          }
        }
      }
    }
    return {
      initialActiveSectionIndex: initialIndex,
      activeSectionIndex: initialIndex,
      activeSubsection: activeSubsection
    };
  },
  componentDidMount: function() {
    // called once when component initially mounts
  },
  switchSection: function(newActiveSectionIndex) {
    this.setState({activeSectionIndex: newActiveSectionIndex});
    this.setState({activeSubsection: null});
  },
  clickSubsection: function(newActiveSubsection) {
    this.setState({activeSubsection: newActiveSubsection});
  },
	render: function() {
    var tabNav = React.cloneElement(
      React.Children.toArray(this.props.children)[0], 
      { 
        initialActiveTabIndex: this.state.initialActiveSectionIndex, 
        switchSection: this.switchSection 
      }
    );
    var tabSectionNav = React.cloneElement(
      React.Children.toArray(this.props.children)[1], 
      { 
        activeSectionIndex: this.state.activeSectionIndex,
        activeSubsection: this.state.activeSubsection,
        clickSubsection: this.clickSubsection
      }
    );
		return (
      <div id="content">
        {tabNav}
        {tabSectionNav}
      </div>
		);
	}
});

module.exports = Tabber;