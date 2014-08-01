# Timer

> because lol

When you're on a piece of shit browser and you're trying to figure out how long
certain things take without having to write `console.time` 100+ times.

## `#start(name)`

```javascript
// create a new timer!
Timer.start('wat');
```

## `#report(name, event)`

```javascript
// log a specific event
Timer.report('wat', 'Get all the things!');

$http.get('/the/things').then(function () {
  Timer.report('wat', 'Got all the things!');
});
```

## `#end(name)`

```javascript
// stop capturing things
Timer.end('wat');
```

## `#dump(name)`

```javascript
// dump all the things! this will also call Timer.end() for you
Timer.dump('wat');

// Dumping results for "wat"
// "Get all the things!": 150ms
// "Got all the things!": 2000ms
// Total duration for "wat": 2150ms
```