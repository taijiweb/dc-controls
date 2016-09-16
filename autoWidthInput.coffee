{see, pipe, text, div, extendAttrs} = require('domcom')

#  options.inputComponent is not given, component.children[0] will be used as inputComponent <input type="text">
# options.inputEvents can be like "onkeydown onkeyup ...", the default value is "onkeydown"
exports.setAutoWidth = setAutoWidth = (container, options={}) ->

  minWidth = options.minWidth || 48
  maxWidth = options.maxWidth || 200
  spaceWidth = options.spaceWidth || 20
  adjustment = options.adjustment || 1
  inputTextWidth$ = see minWidth
  inputEvents = options.inputEvents || "oninput"
  inputComponent = options.inputComponent || container.children[0]

  inputText$ = see ""

  testSubjectStyle =
    position:'absolute'
    top:'30px'
    width: 'auto',
    height:'20px'
    whiteSpace: 'nowrap',
    display: 'inline-block',
    margin: '0',
    padding: '0',
    'white-space': 'pre' ## to avoid whitespace is not displayed in div
    fontSize: -> container.css('fontSize'),
    fontFamily: -> container.css('fontFamily'),
    fontWeight: -> container.css('fontWeight'),
    letterSpacing: -> container.css('letterSpacing')
    visibility: 'hidden'

  testSubject = div({style:testSubjectStyle}, inputText$)

  inputAttrs =
    style:
      width: pipe inputTextWidth$, (w) -> Math.min(maxWidth, Math.max(Math.floor(w)*adjustment+spaceWidth, minWidth))+'px'

  inputEventHandler = (event, node) ->
    inputText$(node.value)
    testSubject.render()
    inputTextWidth$(testSubject.node.getBoundingClientRect().width)
    inputComponent.render()

  inputComponent.extendAttrs(inputAttrs)
  inputComponent.bind inputEvents, inputEventHandler

  container.pushChild testSubject

exports.autoWidthInput = (attrs, inputAttrs, options) ->
  component = div(attrs, text())
  setAutoWidth(component, options)
