const sinon = require('sinon');
const { beforeEach, afterEach, it, } = require('mocha');
const assert = require('assert');

const setFixedInterval = require('./index.js');

var clock;
beforeEach(function () {
     clock = sinon.useFakeTimers();
 });

afterEach(function () {
    clock.restore();
});

it("should time out after 500 ms", function() {
    var timedOut = false;
    setFixedInterval(function () {
        timedOut = true;
    }, 500);

    assert(!timedOut);
    clock.tick(510);
    assert(timedOut);
});

it("should time out exactly after 100 ms", function() {
    var timedOut = false;
    setInterval(function () {
      timedOut = true;
    }, 100);

    assert(!timedOut);
    clock.tick(100);
    assert(timedOut);
});
