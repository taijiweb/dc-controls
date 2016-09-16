# domcom demo
{select, see, if_, case_, list, func, each, div, p} = dc = require('domcom')
dc.alwaysRender = true

{demoTriangle, demoCombo} = require('./demo-builtins')
splitterDemo = require('./demo-splitter')
accordion = require('./demo-accordion')
dialog = require('./demo-dialog')
autoWidthInput = require('./demo-auto-width-edit')

module.exports = demoMap =
  accordion: accordion
  triangle: demoTriangle
  combo: demoCombo
  dialog: dialog
  splitter:  splitterDemo
  autoWidthInput: autoWidthInput

