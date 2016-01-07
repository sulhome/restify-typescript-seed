'use strict';
var root = './app/';
var gulpConfig = {
    allts: root + '**/*.ts',
    allTypings: './typings/**/*.ts',
    outputFolder: './dist/',
    allTests: root + 'test/**/*.ts'
}

module.exports = gulpConfig;