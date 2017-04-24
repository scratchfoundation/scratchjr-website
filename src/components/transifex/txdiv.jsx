import React from 'react';

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
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    txContent: React.PropTypes.string.isRequired
};
