var setFixedInterval = function(fn, ms, options) {
  var last = new Date().getTime();
  var fixed = last + ms;
  var intervalatedFun;
  intervalatedFun = function() {
    var now = new Date().getTime();
    var delta = now - last;
    fn(delta);
    last = now;
    fixed += ms;
    now = new Date().getTime();
    var next = fixed - now;
    if (next <= 0) {
      var skipIntervals = 1 + parseInt((now - fixed) / ms);
      next = fixed + skipIntervals*ms - now;
    }
    clear_id = setTimeout(intervalatedFun, next);
  }.bind(this);
  var clear_id = setTimeout(intervalatedFun, fixed - new Date().getTime());

  return function cancelFixedInterval() {
    clearTimeout(clear_id);
  };
};
