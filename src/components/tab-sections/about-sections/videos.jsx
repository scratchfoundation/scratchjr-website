import React from 'react';

var classNames = require('classnames');

var VideosSection = React.createClass({
  render: function() {
    return (
      <div 
        className={classNames(
          "content-section", 
          {"content-section-selected": this.props.sectionIndex == this.props.activeSectionIndex}
        )}
        id="videos-section">
        <div className="content-section-title">
         Videos
        </div>
        <div className="content-section-description">
          Webinars for educators and parents
        </div>
        <div className="content-section-items-container">
          <div className="content-section-half-item">
            <div className="content-section-item-title">
              Pre-Launch Webinar (March 2014)
            </div>
            <div className="content-section-item-thumbnail">
              <iframe width="342" height="192" src="http://www.youtube.com/embed/owAA_IjdVUM?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="content-section-item-description">
              Project leaders Marina Bers and Mitch Resnick
              demonstrate how to create a simple project, discuss ScratchJr features,
              and share favorite stories from beta-testing the app in classrooms.
            </div>
          </div>
          <div className="content-section-half-item">
            <div className="content-section-item-title">
              Post-Launch Webinar (August 2014)
            </div>
            <div className="content-section-item-thumbnail">
              <iframe width="342" height="192" src="http://www.youtube.com/embed/mZAawCvDlBM?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="content-section-item-description">
              Project leaders Marina Bers and Mitch Resnick
              respond to questions about the initial release of ScratchJr, and discuss
              future directions for the programming environment.
            </div>
          </div>
          <div className="content-section-half-item">
            <div className="content-section-item-title">
              EdWeb Webinar
            </div>
            <div className="content-section-item-thumbnail">
              <iframe src="//player.vimeo.com/video/108504313?title=0&amp;byline=0&amp;portrait=0"
                width="342" height="214" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              <p><a href="http://vimeo.com/108504313">EdWeb Webinar</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
            <div className="content-section-item-description">
              Research Coordinator Amanda Strawhacker explores pedagogy
              around young children's programming languages, and presents affordances of digital playgrounds.
              She discusses why programming is an important skill for early education.
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = VideosSection;