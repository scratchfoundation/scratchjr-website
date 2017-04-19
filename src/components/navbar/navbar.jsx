import React from 'react';
import classNames from 'classnames';
import './navbar.scss';

export default class NavBar extends React.Component {
    constructor (props) {
        super(props);
        this.generateHeaderClasses = this.generateHeaderClasses.bind(this);
    }
    generateHeaderClasses (section) {
        return classNames({
            'header-nav-item': true,
            'header-nav-item-selected': this.props.selected === section
        });
    }
    render () {
        return (
            <div id="header">
                <a href="/">
                    <div id="header-logo-wrapper">
                        <img
                            alt="ScratchJr Logo"
                            id="header-logo"
                            src="/images/scratchjrlogo.png"
                        />
                    </div>
                </a>
                <div id="header-nav">
                    <div className="header-nav-item-wrapper">
                        <a href="/about">
                            <div className={this.generateHeaderClasses('about')}>
                                About
                            </div>
                        </a>
                    </div>
                    <div className="header-nav-item-wrapper">
                        <a href="/learn">
                            <div className={this.generateHeaderClasses('learn')}>
                                Learn
                            </div>
                        </a>
                    </div>
                    <div className="header-nav-item-wrapper">
                        <a href="/teach">
                            <div className={this.generateHeaderClasses('teach')}>
                                Teach
                            </div>
                        </a>
                    </div>
                    <div className="header-nav-item-wrapper">
                        <a href="/donate">
                            <div className={this.generateHeaderClasses('donate')}>
                                Donate
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
NavBar.propTypes = {
    selected: React.PropTypes.node
};
