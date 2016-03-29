var div, extend, extendAttrs, pipe, see, setAutoWidth, text, _ref;

_ref = require('domcom'), extend = _ref.extend, see = _ref.see, pipe = _ref.pipe, text = _ref.text, div = _ref.div, extendAttrs = _ref.extendAttrs;

exports.setAutoWidth = setAutoWidth = function(container, options) {
  var initialWidth, inputAttrs, inputComponent, inputEventHandler, inputEvents, inputText$, inputTextWidth$, spaceWidth, testSubject, testSubjectStyle;
  if (options == null) {
    options = {};
  }
  initialWidth = options.initialWidth || 48;
  spaceWidth = options.spaceWidth || 40;
  inputTextWidth$ = see(initialWidth);
  inputEvents = options.inputEvents || "onkeydown";
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
      'z-index': '10',
      width: pipe(inputTextWidth$, function(w) {
        return Math.max(Math.floor(w) + spaceWidth, initialWidth) + 'px';
      }),
      whiteSpace: 'nowrap'
    }
  };
  inputEventHandler = function(event) {
    event.executeDefault = true;
    inputText$(this.value);
    inputTextWidth$(testSubject.node.getBoundingClientRect().width);
    dc.update();
    return this.focus();
  };
  inputComponent.extendAttrs(inputAttrs);
  inputComponent.bind(inputEvents, inputEventHandler);
  container.pushChild(testSubject);
  return container;
};

exports.autoWidthEdit = function(attrs, inputAttrs, options) {
  var component, inputComp;
  component = div(attrs, inputComp = text());
  return setAutoWidth(component, options);
};
