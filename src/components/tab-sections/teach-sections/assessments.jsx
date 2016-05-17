import React from 'react';

var classNames = require('classnames');

var AssessmentsSection = React.createClass({
  render: function() {
    return (
      <div 
        className={classNames(
          "content-section", 
          {"content-section-selected": this.props.sectionIndex == this.props.activeSectionIndex}
        )}
        id="assessments-section">
        <div className="content-section-title">
          Assessments
        </div>
        <div className="content-section-description">
          These assessments provide two different ways to help determine the depth of students' understanding of the relationship between the programming blocks and their associated behaviors. Both assessments use the same basic ScratchJr examples.
        </div>
        <div className="content-section-items-container">
          <div className="content-section-full-item">
            <div className="content-section-item-title">
              Circle-the-Blocks Assessment
            </div>
            <div className="content-section-item-thumbnail">
              <img className="content-section-item-thumbnail-image" src="images/assessments/circle-the-blocks.png" />
            </div>
            <div className="content-section-item-description">
              In this basic assessment, students identify which programming blocks were used in a given ScratchJr project, but the students do not sequence the blocks... <a className="read-more" href="assessments/circle-the-blocks.pdf">Read more</a>
            </div>
          </div>
          <div className="content-section-full-item">
            <div className="content-section-item-title">
              Reverse-Engineering Assessment
            </div>
            <div className="content-section-item-thumbnail">
              <img className="content-section-item-thumbnail-image" src="images/assessments/reverse-engineer.png" />
            </div>
            <div className="content-section-item-description">
              In this more in-depth assessment, students view a ScratchJr project and then reconstruct the scripts of the project using pre-printed blocks... <a className="read-more" href="assessments/reverse-engineer-and-labels.pdf">Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AssessmentsSection;