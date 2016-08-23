import React from 'react';

export default class GuideKey extends React.Component {
    render () {
        return (
            <div id="interface-key">
                <div id="interface-key-header">
                    {this.props.id + " | " + this.props.title}
                </div>
                <div id="interface-key-description">
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
