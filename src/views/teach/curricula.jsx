import React from 'react';

export default class CurriculaSection extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
CurriculaSection.propTypes = {
    children: React.PropTypes.node
};
