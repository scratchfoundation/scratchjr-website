import React from 'react';
import './printbutton.scss';

export default class PrintButton extends React.Component {
    handleClick () {
        window.print();
    }
    render () {
        return (
            <button
                onClick={this.handleClick}
                className="blue-button print"
            >
                Print
            </button>
        );
    }
}
