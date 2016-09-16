var flow, see, _ref;

_ref = require('lazy-flow'), see = _ref.see, flow = _ref.flow;

module.exports = function(interval) {
  return function(comp) {
    var timer, visible$;
    if (interval == null) {
      interval = 500;
    }
    timer = null;
    comp.on('willMount', function() {
      return timer = setInterval((function() {
        visible$(!visible$());
        return comp.render();
      }), interval);
    });
    comp.on('willUnmount', function() {
      return clearInterval(timer);
    });
    visible$ = see(true);
    this.style.visibility = flow(visible$, function() {
      if (visible$()) {
        return 'visible';
      } else {
        return 'hidden';
      }
    });
    return comp;
  };
};
