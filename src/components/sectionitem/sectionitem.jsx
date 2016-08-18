import React from 'react';
import {Link} from 'react-router'
require('./sectionitem.scss');

var SectionItem = React.createClass({
    type: 'SectionItem',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        format: React.PropTypes.oneOf(['full', 'half']).isRequired,
        thumbnail: React.PropTypes.object.isRequired,
        description: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div className={"content-section-" + this.props.format + "-item"}>
                <div className="content-section-item-title">
                    {this.props.title}
                </div>
                <div className="content-section-item-thumbnail">
                    {this.props.thumbnail}
                </div>
                <div className="content-section-item-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
});

var LinkedSectionItem = React.createClass({
    type: 'SectionItem',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        format: React.PropTypes.oneOf(['full', 'half']).isRequired,
        thumbnail: React.PropTypes.object.isRequired,
        description: React.PropTypes.string.isRequired,
        linkURL: React.PropTypes.string.isRequired,
        linkText: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
          <div className={"content-section-" + this.props.format + "-item"}>
            <Link to={this.props.linkURL}>
            <div className="content-section-item-title">
              {this.props.title}
            </div>
            </Link>
            <Link to={this.props.linkURL}>
            <div className="content-section-item-thumbnail">
              {this.props.thumbnail}
            </div>
            </Link>
            <div className="content-section-item-description">
              {this.props.description}
              <Link to={this.props.linkURL}>{this.props.linkText}</Link>
            </div>
          </div>
        );
    }
});

var StaticLinkSectionItem = React.createClass({
    type: 'SectionItem',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        format: React.PropTypes.oneOf(['full', 'half']).isRequired,
        thumbnail: React.PropTypes.object.isRequired,
        description: React.PropTypes.string.isRequired,
        linkURL: React.PropTypes.string.isRequired,
        linkText: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
          <div className={"content-section-" + this.props.format + "-item"}>
            <a href={this.props.linkURL} target="_blank">
            <div className="content-section-item-title">
              {this.props.title}
            </div>
            </a>
            <a href={this.props.linkURL} target="_blank">
            <div className="content-section-item-thumbnail">
              {this.props.thumbnail}
            </div>
            </a>
            <div className="content-section-item-description">
                {this.props.description}
                <a href={this.props.linkURL} target="_blank">{this.props.linkText}</a>
            </div>
          </div>
        );
    }
});

module.exports = {SectionItem, LinkedSectionItem, StaticLinkSectionItem}
