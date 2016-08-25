import React from 'react';
import {Link} from 'react-router';
import './sectionitem.scss';

export class SectionItem extends React.Component {
    render () {
        return (
            <div className={'content-section-' + this.props.format + '-item'}>
                <div className='content-section-item-title'>
                    {this.props.title}
                </div>
                <div className='content-section-item-thumbnail'>
                    {this.props.thumbnail}
                </div>
                <div className='content-section-item-description'>
                    {this.props.description}
                </div>
            </div>
        );
    }
}
SectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.object.isRequired,
    description: React.PropTypes.string.isRequired
};

export class LinkedSectionItem extends React.Component {
    render () {
        return (
          <div className={'content-section-' + this.props.format + '-item'}>
            <Link to={this.props.linkURL}>
            <div className='content-section-item-title'>
              {this.props.title}
            </div>
            </Link>
            <Link to={this.props.linkURL}>
            <div className='content-section-item-thumbnail'>
              {this.props.thumbnail}
            </div>
            </Link>
            <div className='content-section-item-description'>
              {this.props.description}
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
    thumbnail: React.PropTypes.object.isRequired,
    description: React.PropTypes.string.isRequired,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired
};

export class StaticLinkSectionItem extends React.Component {
    render () {
        return (
          <div className={'content-section-' + this.props.format + '-item'}>
            <a href={this.props.linkURL} target='_blank'>
            <div className='content-section-item-title'>
              {this.props.title}
            </div>
            </a>
            <a href={this.props.linkURL} target='_blank'>
            <div className='content-section-item-thumbnail'>
              {this.props.thumbnail}
            </div>
            </a>
            <div className='content-section-item-description'>
                {this.props.description}
                <a href={this.props.linkURL} target='_blank'>{this.props.linkText}</a>
            </div>
          </div>
        );
    }
}
StaticLinkSectionItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    format: React.PropTypes.oneOf(['full', 'half']).isRequired,
    thumbnail: React.PropTypes.object.isRequired,
    description: React.PropTypes.string.isRequired,
    linkURL: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired
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
              </div>
              {this.props.children}
            </div>
        );
    }
}
Section.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
};
