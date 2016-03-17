var dialog, div, list;

list = dc.list, div = dc.div;

dialog = require('dc-controls/dialog');

module.exports = function() {
  var dlg;
  return dlg = dialog({
    overlay: true,
    showClose: true
  }, div({
    "class": 'message'
  }, 'click to close me', div({
    onclick: (function() {
      return dlg.close();
    })
  }, 'OK')));
};
