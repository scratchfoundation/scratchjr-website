import React from 'react';

export default class TipsSection extends React.Component{
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
TipsSection.propTypes = {
    children: React.PropTypes.node
};
