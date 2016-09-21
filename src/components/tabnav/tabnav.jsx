import React from 'react';
import {Link} from 'react-router';
import './tabnav.scss';

export default class TabNav extends React.Component {
    render () {
        return (
            <div id="content-nav">
                {this.props.items.map((tab) => {
                    return (
                        <Link to={tab.url} activeClassName="content-nav-item-selected" key={tab.section}>
                            <div className="content-nav-item" id={tab.section + '-section-nav'}>
                                <div className={tab.section + '-icon content-nav-item-icon'}></div>
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
}
TabNav.propTypes = {
    items: React.PropTypes.array
};
