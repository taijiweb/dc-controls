{list, div} = dc
dialog = require('dc-controls/dialog')

module.exports = ->
  dlg = dialog
    overlay:true,
    showClose:true

    div class: 'message',
      'click to close me',
      div onclick: (-> dlg.close()),
        'OK'