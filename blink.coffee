{see, flow} = require('lazy-flow')

module.exports = (interval) -> (comp) ->
  if !interval?
    interval = 500
  timer = null
  comp.on 'willMount', ->
    timer = setInterval((->
      visible$(!visible$())
      comp.render()), interval)
  comp.on 'willUnmount', -> clearInterval timer
  visible$ = see true
  this.style.visibility = flow visible$, ->
    if visible$()
      'visible'
    else
      'hidden'
  comp