import React from 'react';

var TabSectionNav = React.createClass({
	render: function() {
    var childrenWithProps = React.Children.map(
      this.props.children, 
      (child, i) =>
        React.cloneElement(
          child, 
          { 
            sectionIndex: i, 
            activeSectionIndex: this.props.activeSectionIndex,
          }
        )
    );
		return (
      <div >
        {childrenWithProps}
      </div>
		);
	}
});

module.exports = TabSectionNav;