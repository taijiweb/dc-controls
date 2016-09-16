var div, extendAttrs, pipe, see, setAutoWidth, text, _ref;

_ref = require('domcom'), see = _ref.see, pipe = _ref.pipe, text = _ref.text, div = _ref.div, extendAttrs = _ref.extendAttrs;

exports.setAutoWidth = setAutoWidth = function(container, options) {
  var adjustment, inputAttrs, inputComponent, inputEventHandler, inputEvents, inputText$, inputTextWidth$, maxWidth, minWidth, spaceWidth, testSubject, testSubjectStyle;
  if (options == null) {
    options = {};
  }
  minWidth = options.minWidth || 48;
  maxWidth = options.maxWidth || 200;
  spaceWidth = options.spaceWidth || 20;
  adjustment = options.adjustment || 1;
  inputTextWidth$ = see(minWidth);
  inputEvents = options.inputEvents || "oninput";
  inputComponent = options.inputComponent || container.children[0];
  inputText$ = see("");
  testSubjectStyle = {
    position: 'absolute',
    top: '30px',
    width: 'auto',
    height: '20px',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    margin: '0',
    padding: '0',
    'white-space': 'pre',
    fontSize: function() {
      return container.css('fontSize');
    },
    fontFamily: function() {
      return container.css('fontFamily');
    },
    fontWeight: function() {
      return container.css('fontWeight');
    },
    letterSpacing: function() {
      return container.css('letterSpacing');
    },
    visibility: 'hidden'
  };
  testSubject = div({
    style: testSubjectStyle
  }, inputText$);
  inputAttrs = {
    style: {
      width: pipe(inputTextWidth$, function(w) {
        return Math.min(maxWidth, Math.max(Math.floor(w) * adjustment + spaceWidth, minWidth)) + 'px';
      })
    }
  };
  inputEventHandler = function(event, node) {
    inputText$(node.value);
    testSubject.render();
    inputTextWidth$(testSubject.node.getBoundingClientRect().width);
    return inputComponent.render();
  };
  inputComponent.extendAttrs(inputAttrs);
  inputComponent.bind(inputEvents, inputEventHandler);
  return container.pushChild(testSubject);
};

exports.autoWidthInput = function(attrs, inputAttrs, options) {
  var component;
  component = div(attrs, text());
  return setAutoWidth(component, options);
};
