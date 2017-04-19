module.exports = {
    root: true,
    extends: ['scratch', 'scratch/es6', 'scratch/react'],
    rules: {
        'react/jsx-sort-props': [0],
        'react/sort-prop-types': [1]
    },
    env: {
        browser: true
    }
}
