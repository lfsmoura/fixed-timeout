FixedTimeInterval
==

Javascript has an awesome function called `setInterval`. The problem is that that function can delay some seconds or can run erraticaly if there are slow functions running in between calls.

For some applications (such as a gamming update loop) it is desirable to have some properties:

 * A delta time is passed as a parameter indicating how much time has elapsed since the last function call;
 * Some calls could be skipped if they take too much long to be called

 That's what this package does in a nutshell. No more, no less.

Usage
-----

    function update(delta) {
      console.log(delta);
    }
    var cancel = setFixedInterval(update, 1000);
    // ...
    // to clearInterval:
    cancel();

Example
---

  See `example.html`.
