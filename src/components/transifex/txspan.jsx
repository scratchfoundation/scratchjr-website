import React from 'react';

export default class TxSpan extends React.Component {
    render () {

        return (
            <span
                className={this.props.className}
                id={this.props.id}
                ref={node => node && node.setAttribute('tx-content', this.props.txContent)}
            >
                {this.props.children}
            </span>
        );
    }
}
TxSpan.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    txContent: React.PropTypes.string.isRequired
};
