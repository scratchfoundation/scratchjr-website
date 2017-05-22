import React from 'react';

export default class BlockItem extends React.Component {
    render () {
        return (
            <div className="block-wrapper">
                <div className="block-title">
                    {this.props.title}
                </div>
                <div className="block-image-wrapper">
                    <img
                        className={this.props.imageClass}
                        src={this.props.image}
                    />
                </div>
                <div className="block-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

BlockItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    imageClass: React.PropTypes.string,
    description: React.PropTypes.string.isRequired
};
BlockItem.defaultProps = {imageClass: 'block-image'};
