import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './guidebutton.scss';

export default class GuideButton extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.props.clickHandler(this.props.index);
    }
    render () {
        const classes = classNames({
            'guide-button': true,
            'guide-button-selected': this.props.selected
        });
        return (
            <div>
                <div
                    className={classes}
                    id={this.props.name}
                    onClick={this.handleClick}
                >
                    <div className="guide-button-text">{this.props.index + 1}</div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

GuideButton.propTypes = {
    children: PropTypes.node,
    clickHandler: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool
};
GuideButton.defaultProps = {selected: false};
