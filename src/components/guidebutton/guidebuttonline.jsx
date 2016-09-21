import React from 'react';
import './guidebuttonline.scss';

export default class GuideButtonLine extends React.Component {
    render () {
        var lineClass = 'guide-vertical-line';
        if (this.props.type == 'dot') {
            lineClass = 'guide-dot';
        } else if (this.props.type == 'horizontal') {
            lineClass = 'guide-horizontal-line';
        }
        return (
            <div className={lineClass} id={this.props.id} ></div>
        );
    }
}

GuideButtonLine.propTypes = {
    type: React.PropTypes.oneOf(['dot', 'vertical', 'horizontal']).isRequired,
    id: React.PropTypes.string.isRequired
};
