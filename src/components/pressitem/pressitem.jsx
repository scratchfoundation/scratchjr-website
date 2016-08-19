import React from 'react';

export default class PressItem extends React.Component {
    render () {
        return (
            <div className='content-description-answer'>
                <a href={this.props.url}>
                    {this.props.title}
                </a>&nbsp;-&nbsp;
                {this.props.source}. {this.props.dateString}
            </div>
        );
    }
}
PressItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    source: React.PropTypes.string.isRequired,
    dateString: React.PropTypes.string.isRequired
};
