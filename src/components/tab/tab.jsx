import React from 'react';

var classNames = require('classnames');

var Tab = React.createClass({
  handleClick: function() {
    this.props.switchTabs(this.props.tabIndex);
  },
  render: function() {
    return (
      <div>
        <a href={"#" + this.props.tabId}>
          <div 
            className={classNames(
              "content-nav-item", 
              "content-nav-item-" + this.props.tabLocation, 
              {"content-nav-item-selected": this.props.tabIndex == this.props.activeTabIndex}
            )} 
            id={this.props.tabId + "-nav"}
            onClick={this.handleClick}>
            <div className={classNames("content-nav-item-icon", this.props.iconClass)}/>
            <div className="content-nav-item-description">
              {this.props.title}
            </div>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = Tab;