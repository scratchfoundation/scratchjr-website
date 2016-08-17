import React from 'react';
import {Link} from 'react-router'
require('./sectionitem.scss');

var SectionItem = React.createClass({
    type: 'SectionItem',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        format: React.PropTypes.oneOf(['full', 'half']).isRequired,
        thumbnail: React.PropTypes.object.isRequired,
        description: React.PropTypes.string.isRequired,
        linkURL: React.PropTypes.string,
        linkText: React.PropTypes.string
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

module.exports = SectionItem;
