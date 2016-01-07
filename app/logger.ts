import bunyan = require('bunyan');
import {settings} from './config';

export let logger = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },
    {
      level: 'error',
      path: `error.log`
    }
  ]
});