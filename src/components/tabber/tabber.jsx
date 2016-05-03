import React from 'react';

var Tabber = React.createClass({
  getInitialState: function() {
    var tabs = [];
    var tabnav = React.Children.toArray(this.props.children)[0]; // get TabNav component
    React.Children.forEach(tabnav.props.children, (child) => tabs.push(child.props.tabId)); // get tabId's
    var hash = location.hash.substr(1); // get hash from URL if it exists
    var initialIndex = 0;

    if (hash && tabs.indexOf(hash) >= 0) {
      initialIndex = tabs.indexOf(hash); // set initial index of tabber corresponding to URL hash
    }
    return {
      initialActiveSectionIndex: initialIndex,
      activeSectionIndex: initialIndex
    };
  },
  componentDidMount: function() {
    // called once when component initially mounts
  },
  switchSection: function(newActiveSectionIndex) {
    this.setState({activeSectionIndex: newActiveSectionIndex});
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
        activeSectionIndex: this.state.activeSectionIndex
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