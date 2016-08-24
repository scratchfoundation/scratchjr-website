import React from 'react';
import './guidekey.scss'

export default class GuideKey extends React.Component {
    render () {
        return (
            <div id="guide-key">
                <div id="key-header">
                    {this.props.id + " | " + this.props.title}
                </div>
                <div id="key-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

GuideKey.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
};
