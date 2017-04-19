import React from 'react';
import './sectionitem.scss';

export class Section extends React.Component {
    render () {
        return (
            <div
                className="content-section content-subpage"
                id={this.props.id}
            >
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
