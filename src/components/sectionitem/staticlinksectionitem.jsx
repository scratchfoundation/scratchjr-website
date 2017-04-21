import React from 'react';
import './sectionitem.scss';
import TxDiv from '../transifex/txdiv.jsx';

export class StaticLinkSectionItem extends React.Component {
    render () {
        let thumb;
        const txContent = this.props.translateUrls ? 'translate_urls' : '';
        if (typeof this.props.thumbnail === 'string') {
            thumb = (<img
                className="content-section-item-thumbnail-image"
                src={this.props.thumbnail}
            />);
        } else {
            thumb = this.props.thumbnail;
        }
        return (
            <TxDiv
                className={`content-section-${this.props.format}-item`}
                txContent={txContent}
            >
                <a
                    href={this.props.linkURL}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="content-section-item-title">
                        {this.props.title}
                    </div>
                </a>
                <a
                    href={this.props.linkURL}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="content-section-item-thumbnail">
                        {thumb}
                    </div>
                </a>
                <div className="content-section-item-description">
                    {this.props.description || this.props.children}{' '}
                    <a
                        href={this.props.linkURL}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {this.props.linkText}
                    </a>
                </div>
            </TxDiv>
        );
    }
}
StaticLinkSectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    translateUrls: React.PropTypes.bool,
    children: React.PropTypes.node
};
