module.exports = {
    entry: './src/tnx-core.ts',
    output: {
        filename: './dist/tnx-core.js',
        library: "tnx-core",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },ts:{
        compilerOptions:{
            "declaration": true,
            "outDir": "dist"

        }
    }
}