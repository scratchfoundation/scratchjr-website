import React from 'react';

export default class CurriculaSection extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
