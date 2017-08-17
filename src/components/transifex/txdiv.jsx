import React from 'react';
import PropTypes from 'prop-types';

export default class TxDiv extends React.Component {
    render () {

        return (
            <div
                className={this.props.className}
                id={this.props.id}
                ref={
                    node => {
                        if (node && this.props.txContent !== '') {
                            node.setAttribute('tx-content', this.props.txContent);
                        }

                    }
                }
            >
                {this.props.children}
            </div>
        );
    }
}
TxDiv.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    txContent: PropTypes.string.isRequired
};
