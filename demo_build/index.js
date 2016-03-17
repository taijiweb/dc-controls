var demoMap, runDemo;

runDemo = require('domcom/demo/util').runDemo;

demoMap = require('./util');

window.onload = function() {
  return runDemo(demoMap, 'dialog');
};
