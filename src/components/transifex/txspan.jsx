import React from 'react';
import PropTypes from 'prop-types';

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
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    txContent: PropTypes.string.isRequired
};
