import React from 'react';
import classNames from 'classnames';

export default class GuideButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.props.clickHandler(this.props.index);
    }
    render () {
        var classes = classNames({
            'interface-button': true,
            'interface-button-selected': this.props.selected
        });
        return (
            <div className={classes} id={this.props.name} onClick={this.handleClick}>
                <div className="interface-button-text">{this.props.index + 1}</div>
            </div>
        );
    }
}

GuideButton.propTypes = {
    name: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    clickHandler: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool
};
GuideButton.defaultProps = {selected: false}
