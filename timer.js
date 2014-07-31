(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else if (typeof module !== 'undefined') {
    module.exports = factory();
  }
  else {
    root.Timer = factory();
  }

}(this, function () {

  'use strict';

  var timers = {};

  function startTimer (name) {
    timers[name] = {
      start: Date.now(),
      events: []
    };
  }

  function endTimer (name) {
    timers[name].end = Date.now();
  }

  function reportEvent (name, eventName) {
    timers[name].events.push({
      name: eventName,
      timestamp: Date.now()
    });
  }

  function dumpResults (name) {
    var prettyName = '"' + name + '"';
    var timer = timers[name];
    var total;

    if (!timer.end) {
      endTimer(name);
    }

    console.log('Dumping results for', prettyName);

    timer.events.forEach(function (event) {
      var duration = (event.timestamp - timer.start) + 'ms';
      var prettyEventName = '"' + event.name + '":';

      console.log(prettyEventName, duration);
    });

    total = (timer.end - timer.start) + 'ms';
    console.log('Total duration for', prettyName + ':', total);
  }

  return {
    start: startTimer,
    end: endTimer,
    report: reportEvent,
    dump: dumpResults
  };

}));