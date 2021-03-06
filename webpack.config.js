﻿'use strict';

const webpack = require('webpack');
const path = require('path');

const libraryName = 'og';

let outputFile = libraryName + '.js';

module.exports = {
    entry: __dirname + "/src/og/index.js",
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: "source-map",
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    optimization: {
        usedExports: true,
        concatenateModules: true,
        occurrenceOrder: true
    },
    stats: {
        maxModules: Infinity,
        optimizationBailout: true
    }
};
