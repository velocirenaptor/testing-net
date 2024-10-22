const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            fs: false,
            stream: require.resolve('stream-browserify'),
            process: require.resolve('process/browser'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};
