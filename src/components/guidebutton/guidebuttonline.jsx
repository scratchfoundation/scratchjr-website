import React from 'react';
import './guidebuttonline.scss';

export default class GuideButtonLine extends React.Component {
    render () {
        let lineClass = 'guide-vertical-line';
        if (this.props.type === 'dot') {
            lineClass = 'guide-dot';
        } else if (this.props.type === 'horizontal') {
            lineClass = 'guide-horizontal-line';
        }
        return (
            <div
                className={lineClass}
                id={this.props.id}
            />
        );
    }
}

GuideButtonLine.propTypes = {
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['dot', 'vertical', 'horizontal']).isRequired
};
