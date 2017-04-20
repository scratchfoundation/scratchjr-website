import React from 'react';
import {Link} from 'react-router';
import './sectionitem.scss';

export class LinkedSectionItem extends React.Component {
    render () {
        let thumb;
        if (typeof this.props.thumbnail === 'string') {
            thumb = (
                <img
                    className="content-section-item-thumbnail-image"
                    src={this.props.thumbnail}
                />
            );
        } else {
            thumb = this.props.thumbnail;
        }
        return (
            <div className={`content-section-${this.props.format}-item`}>
                <Link to={this.props.linkURL}>
                    <div className="content-section-item-title">
                        {this.props.title}
                    </div>
                </Link>
                <Link to={this.props.linkURL}>
                    <div className="content-section-item-thumbnail">
                        {thumb}
                    </div>
                </Link>
                <div className="content-section-item-description">
                    {this.props.description || this.props.children}
                    <Link to={this.props.linkURL}>
                        {this.props.linkText}
                    </Link>
                </div>
            </div>
        );
    }
}
LinkedSectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
};
