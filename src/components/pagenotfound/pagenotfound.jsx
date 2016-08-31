import React from 'react';

export default class PageNotFound extends React.Component {
    render () {
        return (
            <div className='content-section'>
                <h1>Page Not Found</h1>
                <p>Go to the <a href='/'>Home</a> page.</p>
            </div>
        );
    }
}
