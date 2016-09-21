import React from 'react';
import {Link} from 'react-router';
import './sectionitem.scss';

export class SectionItem extends React.Component {
    render () {
        var thumb;
        if (typeof this.props.thumbnail == 'string') {
            thumb = <img className = 'content-section-item-thumbnail-image' src = {this.props.thumbnail} />;
        } else {
            thumb = this.props.thumbnail;
        }
        return (
            <div className={'content-section-' + this.props.format + '-item'}>
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
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    children: React.PropTypes.node
};

export class LinkedSectionItem extends React.Component {
    render () {
        var thumb;
        if (typeof this.props.thumbnail == 'string') {
            thumb = <img className = 'content-section-item-thumbnail-image' src = {this.props.thumbnail} />;
        } else {
            thumb = this.props.thumbnail;
        }
        return (
          <div className={'content-section-' + this.props.format + '-item'}>
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
              &nbsp;<Link to={this.props.linkURL}>
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
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
};

export class StaticLinkSectionItem extends React.Component {
    render () {
        var thumb;
        if (typeof this.props.thumbnail == 'string') {
            thumb = <img className = 'content-section-item-thumbnail-image' src = {this.props.thumbnail} />;
        } else {
            thumb = this.props.thumbnail;
        }
        return (
          <div className={'content-section-' + this.props.format + '-item'}>
            <a href={this.props.linkURL} target="_blank">
            <div className="content-section-item-title">
              {this.props.title}
            </div>
            </a>
            <a href={this.props.linkURL} target="_blank">
            <div className="content-section-item-thumbnail">
              {thumb}
            </div>
            </a>
            <div className="content-section-item-description">
                {this.props.description  || this.props.children}
                &nbsp;<a href={this.props.linkURL} target="_blank">{this.props.linkText}</a>
            </div>
          </div>
        );
    }
}
StaticLinkSectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.string]).isRequired,
    description: React.PropTypes.string,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
};

export class Section extends React.Component {
    render () {
        return (
            <div className="content-section content-subpage" id={this.props.id}>
              <div className="content-section-title">
                {this.props.title}
              </div>
              <div className="content-section-description">
                {this.props.description}
                {this.props.children}
              </div>

            </div>
        );
    }
}
Section.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    children: React.PropTypes.node
};
