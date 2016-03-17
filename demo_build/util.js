var accordion, autoWidthEdit, case_, dc, demoCombo, demoMap, demoTriangle, dialog, div, each, func, if_, list, p, see, select, splitterDemo, _ref, _ref1;

_ref = dc = require('domcom'), select = _ref.select, see = _ref.see, if_ = _ref.if_, case_ = _ref.case_, list = _ref.list, func = _ref.func, each = _ref.each, div = _ref.div, p = _ref.p;

dc.alwaysUpdate = true;

_ref1 = require('./demo-builtins'), demoTriangle = _ref1.demoTriangle, demoCombo = _ref1.demoCombo;

splitterDemo = require('./demo-splitter');

accordion = require('./demo-accordion');

dialog = require('./demo-dialog');

autoWidthEdit = require('./demo-auto-width-edit');

module.exports = demoMap = {
  accordion: accordion,
  triangle: demoTriangle,
  combo: demoCombo,
  dialog: dialog,
  splitter: splitterDemo,
  autoWidthEdit: autoWidthEdit
};
