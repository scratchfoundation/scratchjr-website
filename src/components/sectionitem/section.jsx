import React from 'react';
import './sectionitem.scss';
import TxDiv from '../transifex/txdiv.jsx';

export class Section extends React.Component {
    render () {
        const txContent = this.props.translateUrls ? 'translate_urls' : '';
        return (
            <TxDiv
                className="content-section content-subpage"
                id={this.props.id}
                txContent={txContent}
            >
                <div className="content-section-title">
                    {this.props.title}
                </div>
                <div className="content-section-description">
                    {this.props.description}
                    {this.props.children}
                </div>

            </TxDiv>
        );
    }
}
Section.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    translateUrls: React.PropTypes.bool,
    description: React.PropTypes.string,
    children: React.PropTypes.node
};
