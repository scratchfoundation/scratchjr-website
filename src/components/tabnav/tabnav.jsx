import React from 'react';

var tabLocations = ['left', 'middle', 'right']; // corresponds to css class: "content-nav-item-" + tabLocation

var TabNav = React.createClass({
  getInitialState: function() {
    return {
      activeTabIndex: this.props.initialActiveTabIndex
    };
  },
  componentDidMount: function() {
    // called once when component initially mounts
  },
  getTabLocation: function(index, numChildren) { // determine location of index in order to set css properly
    if (index == 0) {
      return tabLocations[0];
    } else if (index == numChildren - 1) {
      return tabLocations[2];
    } else {
      return tabLocations[1];
    }
  },
  switchTabs: function(newActiveTabIndex) {
    this.setState({activeTabIndex: newActiveTabIndex}); // switch tab, will cause newly selected tab to highlight
    this.props.switchSection(newActiveTabIndex); // parent will switch the section accordingly
  },
	render: function() {
    var childrenWithProps = React.Children.map(
      this.props.children, 
      (child, i) =>
        React.cloneElement(
          child, 
          { 
            tabIndex: i, 
            tabLocation: this.getTabLocation(i, React.Children.count(this.props.children)), 
            activeTabIndex: this.state.activeTabIndex, 
            switchTabs: this.switchTabs 
          }
        )
    );
		return (
      <div id="content-nav">
        {childrenWithProps}
      </div>
		);
	}
});

module.exports = TabNav;