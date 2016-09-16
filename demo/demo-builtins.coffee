{
duplex
div
list
} = dc

{hcombo, vcombo} = require('dc-controls/combo')
triangle = require('dc-controls/triangle')

exports.demoTriangle =  ->
  div({},
    triangle({}, 'top', 10, 'blue'),
    triangle({}, 'bottom', 10, 'black'),
    triangle({}, 'left', 10, 'red')
    triangle({}, 'right', 10, 'green'))

exports.demoCombo =  ->
  a = {}
  a_x$ = duplex(a, 'x')
  combo1 = hcombo({style:{display:'inline-block'}}, a_x$, 'a b'.split(' '))
  combo2 = vcombo({style:{display:'inline-block'}}, a_x$, 'a b'.split(' '))
  comp = list(combo2, combo1)
  comp