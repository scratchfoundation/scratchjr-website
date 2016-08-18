import React from 'react';

var PressItem = React.createClass({
    type: 'PressItem',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        source: React.PropTypes.string.isRequired,
        dateString: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div className="content-description-answer">
                <a href={this.props.url}>
                    {this.props.title}
                </a>&nbsp;-&nbsp;
                {this.props.source}. {this.props.dateString}
            </div>
        );
    }
});

module.exports = PressItem;
