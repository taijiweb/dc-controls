# domcom demo
{select, see, if_, case_, list, func, each, div, p} = dc = require('domcom')
dc.alwaysUpdate = true

{demoTriangle, demoCombo} = require('./demo-builtins')
splitterDemo = require('./demo-splitter')
accordion = require('./demo-accordion')
dialog = require('./demo-dialog')
autoWidthEdit = require('./demo-auto-width-edit')

module.exports = demoMap =
  accordion: accordion
  triangle: demoTriangle
  combo: demoCombo
  dialog: dialog
  splitter:  splitterDemo
  autoWidthEdit: autoWidthEdit

