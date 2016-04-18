import React from 'react';

var NavBar = React.createClass({
	render: function() {
		return (
			<div id="header">
		    <a href="/">
		      <div id="header-logo-wrapper">
		        <img src="images/scratchjrlogo.png" id="header-logo" alt="ScratchJr Logo" />
		      </div>
		    </a>
		    <div id="header-nav">
		      <div className="header-nav-item-wrapper">
		        <a href="about">
		          <div className="header-nav-item">
		            About
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="learn">
		          <div className="header-nav-item">
		            Learn
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="teach">
		          <div className="header-nav-item">
		            Teach
		          </div>
		        </a>
		      </div>
		      <div className="header-nav-item-wrapper">
		        <a href="donate">
		          <div className="header-nav-item">
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