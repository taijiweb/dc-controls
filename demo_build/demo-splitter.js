var div, splitter;

div = dc.div;

splitter = require('dc-controls/splitter');

module.exports = function() {
  var comp;
  dc.directives({
    $splitter: splitter
  });
  return comp = div({
    $splitter: 'vertical',
    style: {
      height: '100%',
      width: '100%'
    }
  }, div({
    style: {
      'background-color': "blue",
      height: '50%',
      width: '100%'
    }
  }, 1), div({
    $splitter: 'horizontal',
    style: {
      'background-color': "grey",
      height: '50%',
      width: '100%'
    }
  }, div({
    style: {
      'background-color': "red",
      display: 'inline-block',
      height: '100%',
      width: '40%'
    }
  }, 2), div({
    style: {
      'background-color': "green",
      display: 'inline-block',
      height: '100%',
      width: '40%'
    }
  }, 3)));
};
