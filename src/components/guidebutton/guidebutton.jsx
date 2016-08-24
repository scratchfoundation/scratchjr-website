import React from 'react';
import classNames from 'classnames';
import './guidebutton.scss';

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
            'guide-button': true,
            'guide-button-selected': this.props.selected
        });
        return (
            <div>
            <div className={classes} id={this.props.name} onClick={this.handleClick}>
                <div className="guide-button-text">{this.props.index + 1}</div>
            </div>
            {this.props.lines.map((line, index) => {
                return (<div className={line.lineClass} id={line.lineId} key={index}></div>);
            })}
            </div>
        );
    }
}

GuideButton.propTypes = {
    name: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    clickHandler: React.PropTypes.func.isRequired,
    lines: React.PropTypes.array.isRequired,
    selected: React.PropTypes.bool
};
GuideButton.defaultProps = {selected: false}
