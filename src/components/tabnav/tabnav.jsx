import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import './tabnav.scss';

const TabNav = ({items}) => (
    <div id="content-nav">
        {items.map(tab => (
            <Link
                to={tab.url}
                activeClassName="content-nav-item-selected"
                key={tab.section}
            >
                <div
                    className="content-nav-item"
                    id={`${tab.section}-section-nav`}
                >
                    <div className={`${tab.section}-icon content-nav-item-icon`} />
                    <div className="content-nav-item-description">
                        {tab.text}
                    </div>
                </div>
            </Link>
        ))}
    </div>
);

TabNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        section: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
};
export default TabNav;
