import React from 'react';

var classNames = require('classnames');

var GenericSection = React.createClass({
  render: function() {
    return (
      <div
        className={classNames(
          "content-section",
          "content-subpage",
          {"content-section-selected": this.props.id == (this.props.activeSubsection + '-section')}
        )}
        key={this.props.id}
        id={this.props.id}>
        <div className="content-section-title">
          {this.props.title}
        </div>
        <div className="content-section-description">
          {this.props.description}
        </div>
        {this.props.children}
      </div>
    );
  }
});

var GenericSectionVideo = React.createClass({
  render: function() {
    return (
      <GenericSection id={this.props.id} activeSubsection={this.props.activeSubsection} title={this.props.title} description={this.props.description}>
        <div className="content-section-video">
          <iframe width="640" height="480" src={this.props.videoSrc} frameborder="0" allowfullscreen></iframe>
        </div>
      </GenericSection>
    );
  }
});

module.exports = {
  generic: GenericSection,
  video: GenericSectionVideo
}