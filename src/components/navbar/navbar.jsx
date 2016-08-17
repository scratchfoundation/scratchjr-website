import React from 'react';

var classNames = require('classnames');

var NavBar = React.createClass({
	generateHeaderClasses: function(section) {
		return classNames({
			"header-nav-item": true,
			'header-nav-item-selected': this.props.selected == section
		});
	},
	render: function() {
		return (
			<div id="header">
		    <a href="/">
		      <div id="header-logo-wrapper">
		        <img src="/images/scratchjrlogo.png" id="header-logo" alt="ScratchJr Logo" />
		      </div>
		    </a>
		    <div id="header-nav">
		      <div className="header-nav-item-wrapper">
		        <a href="/about">
		          <div className={this.generateHeaderClasses("about")}>
		            About
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="/learn">
		          <div className={this.generateHeaderClasses("learn")}>
		            Learn
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="/teach">
		          <div className={this.generateHeaderClasses("teach")}>
		            Teach
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="/donate">
		          <div className={this.generateHeaderClasses("donate")}>
		            Donate
		          </div>
		        </a>
		      </div>
		    </div>
      </div>
		);
	}
});

module.exports = NavBar;
