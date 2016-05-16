import React from 'react';

var TabSectionNav = React.createClass({
  clickSubsection: function(newActiveSubsection) {
    this.props.clickSubsection(newActiveSubsection);
  },
	render: function() {
    var activeSectionIndex = this.props.activeSectionIndex;
    var activeSubsection = this.props.activeSubsection;
    var clickHandler = this.clickSubsection;
    var childrenWithProps = React.Children.map(
      this.props.children, 
      function (child, i) {
        return React.cloneElement(
          child, 
          { 
            sectionIndex: i, 
            activeSectionIndex: activeSectionIndex,
            activeSubsection: i == activeSectionIndex ? activeSubsection : null,
            clickSubsection: clickHandler
          }
        );
      }
    );
		return (
      <div >
        {childrenWithProps}
      </div>
		);
	}
});

module.exports = TabSectionNav;