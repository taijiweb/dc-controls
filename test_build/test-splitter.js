var $hide, $show, $splitter, Component, a, bindings, ddescribe, div, duplex, each, expect, func, idescribe, if_, iit, input, list, ndescribe, nit, p, see, select, span, text, _ref;

_ref = require('bdd-test-helper'), expect = _ref.expect, iit = _ref.iit, idescribe = _ref.idescribe, nit = _ref.nit, ndescribe = _ref.ndescribe, ddescribe = _ref.ddescribe;

Component = dc.Component, list = dc.list, func = dc.func, if_ = dc.if_, each = dc.each, a = dc.a, div = dc.div, p = dc.p, span = dc.span, text = dc.text, select = dc.select, input = dc.input, $show = dc.$show, $hide = dc.$hide, bindings = dc.bindings, duplex = dc.duplex, see = dc.see;

$splitter = require('../splitter');

dc.directives('$splitter', $splitter);

describe('splitter', function() {
  return it('should constructor splitter', function() {
    var bounds, children, comp;
    comp = div({
      $splitter: 'vertical',
      style: {
        height: '800px',
        width: '200px'
      }
    }, div(1), div(2));
    comp.mount();
    bounds = comp.node.getBoundingClientRect();
    expect(bounds.width > 0).to.equal(true);
    expect(comp.node.innerHTML).to.match(/splitbar/);
    children = comp.children;
    expect(children[1].node.getBoundingClientRect().top).to.equal(comp.node.getBoundingClientRect().top);
    children[1].node.onmousedown();
    comp.node.onmousemove({
      clientX: 20,
      clientY: 30,
      preventDefault: (function() {}),
      stopPropagation: (function() {})
    });
    expect(children[1].node.getBoundingClientRect().top).to.equal(comp.node.getBoundingClientRect().top);
    expect(children[1].node.style.top).to.equal('0px');
    return comp.node;
  });
});
