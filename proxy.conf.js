const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://localhost:44301/',
    secure: false,
    logLevel: 'debug'
  }
];
/*
        JAVA SPRING
const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',  //'http://localhost:5001'
    secure: false,
    logLevel: 'debug'
  }
];
"target": "",
*/
module.exports = PROXY_CONFIG;
