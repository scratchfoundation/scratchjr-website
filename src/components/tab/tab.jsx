import React from 'react';

var classNames = require('classnames');

var Tab = React.createClass({
	render: function() {
		return (
			<a href={"#" + this.props.tabId}>
              <div className={classNames("content-nav-item", "content-nav-item-selected", "content-nav-item-" + this.props.location)} id={this.props.tabId + "-nav"}>
                <div className={classNames("content-nav-item-icon", this.props.iconClass)}/>
                <div className="content-nav-item-description">
                  {this.props.title}
                </div>
              </div>
            </a>
		);
	}
});

module.exports = Tab;