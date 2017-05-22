import React from 'react';
import './sectionitem.scss';

export class SectionItem extends React.Component {
    render () {
        let thumb;
        if (typeof this.props.thumbnail === 'string') {
            thumb = (<img
                className="content-section-item-thumbnail-image"
                src={this.props.thumbnail}
            />);
        } else {
            thumb = this.props.thumbnail;
        }
        return (
            <div className={`content-section-${this.props.format}-item`}>
                <div className="content-section-item-title">
                    {this.props.title}
                </div>
                <div className="content-section-item-thumbnail">
                    {thumb}
                </div>
                <div className="content-section-item-description">
                    {this.props.description || this.props.children}
                </div>
            </div>
        );
    }
}
SectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    children: React.PropTypes.node
};
