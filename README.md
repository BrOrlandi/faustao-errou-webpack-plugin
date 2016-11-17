# Faustao Errou Webpack Plugin

Play "Errou" sound if the webpack buid has failed.

## Install

    npm install --save-dev faustao-errou-webpack-plugin

## Usage

In your Webpack file:

    var FaustaoErrouWebpackPlugin = require('faustao-errou-webpack-plugin');

    module.exports = {
        ...
        plugins: [
            ...,
            new FaustaoErrouWebpackPlugin()
        ]
    }
