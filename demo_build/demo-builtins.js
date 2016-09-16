var div, duplex, hcombo, list, triangle, vcombo, _ref;

duplex = dc.duplex, div = dc.div, list = dc.list;

_ref = require('dc-controls/combo'), hcombo = _ref.hcombo, vcombo = _ref.vcombo;

triangle = require('dc-controls/triangle');

exports.demoTriangle = function() {
  return div({}, triangle({}, 'top', 10, 'blue'), triangle({}, 'bottom', 10, 'black'), triangle({}, 'left', 10, 'red'), triangle({}, 'right', 10, 'green'));
};

exports.demoCombo = function() {
  var a, a_x$, combo1, combo2, comp;
  a = {};
  a_x$ = duplex(a, 'x');
  combo1 = hcombo({
    style: {
      display: 'inline-block'
    }
  }, a_x$, 'a b'.split(' '));
  combo2 = vcombo({
    style: {
      display: 'inline-block'
    }
  }, a_x$, 'a b'.split(' '));
  comp = list(combo2, combo1);
  return comp;
};
