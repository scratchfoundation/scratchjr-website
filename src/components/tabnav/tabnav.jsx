import React from 'react';
import {Link} from 'react-router'

var TabNav = React.createClass({
    type: 'TabNav',
    propTypes: {
        items: React.PropTypes.array
    },
    render: function() {

        return (
            <div id="content-nav">
                {this.props.items.map((tab, index) => {
                    return (
                        <Link to={tab.url} activeClassName="content-nav-item-selected" key={tab.section}>
                            <div className="content-nav-item" id={tab.section + "-section-nav"}>
                                <div className={tab.section + "-icon content-nav-item-icon"}></div>
                                <div className="content-nav-item-description">
                                    {tab.text}
                                </div>
                            </div>
                        </Link>
                    );

                })}
            </div>
        );
    }
});

module.exports = TabNav;
