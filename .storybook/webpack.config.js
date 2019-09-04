module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loaders: [
            {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'typescript' },
            },
        ],
        enforce: 'pre',
    });
    // config.module.rules.push({
    //     test: /\.css$/,
    //     use: [{
    //       loader: "style-loader"
    //     }, {
    //       loader: "css-loader"
    //     }, {
    //       loader: "less-loader",
    //       options: {
    //         //modifyVars: antdTheme,    // 如果要自定义主题样式
    //         javascriptEnabled: true
    //       }
    //     }]
    // });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};