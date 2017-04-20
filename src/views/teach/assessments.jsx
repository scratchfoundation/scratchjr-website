import React from 'react';

export default class AssessmentsSection extends React.Component {
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
AssessmentsSection.propTypes = {
    children: React.PropTypes.node
};
