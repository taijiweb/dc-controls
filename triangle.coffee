{div, extendAttrs} = require('domcom')

reverseSide = {left:'right', right:'left', top:'bottom', bottom:'top'}

arrowStyle = (direction, size, color) ->
  props = { width: 0, height: 0}
  sideStyle = size+"px solid transparent"
  if direction=='left' or direction=='right'
    props["border-top"] = props["border-bottom"] = sideStyle
  else props["border-left"] =  props["border-right"] = sideStyle
  props["border-"+reverseSide[direction]] = size+"px solid "+color
  props

module.exports = (attrs, direction, size, color) ->
  attrs = extendAttrs attrs, {style:arrowStyle(direction, size, color)}
  div(attrs)