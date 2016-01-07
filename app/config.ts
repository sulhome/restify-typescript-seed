export interface Config {
  name: string,
  port: number,
  env: string,
  version: string
}

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

export let settings: Config = {
  name: 'restify-typescript-seed',
  version: '2.0.0',
  port: 3000,
  env: 'dev'
};

if (env !== 'development') {
  settings.env = 'prod';
}