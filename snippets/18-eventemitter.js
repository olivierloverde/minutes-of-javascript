// Minutes of Javascript #18 - EventEmitter
// See: https://playcode.io/655960/
/* 
    In Node.js aal objects that emit events are instances of the EventEmitter class. 
*/
const EventEmitter = require('events');

/* 
    First useful method is .on('event', callback).
    The callback is called when 'event' is emitted, callback is a 'listener' for that event.
*/
const myEventEmitter = new EventEmitter();
myEventEmitter.on('event', (data) => console.info('1st listener', data));

/*
    .on() is conjointly used with .emit('event', data).
    .emit() will trigger the listeners already declared with .on().
*/
myEventEmitter.emit('event', {'foo': 'bar'}); // returns "1st listener { foo: 'bar' }"

/* 
    .once() registers a listener that is called at most once for a particular event. 
    Once the event is emitted, the listener is unregistered and then called.
*/
myEventEmitter.once('2ndEvent', (data) => console.info('Once listener', data));
myEventEmitter.emit('2ndEvent', {'foo': 'bar'}); // returns "Once listener { foo: 'bar' }"
myEventEmitter.emit('2ndEvent', {'foo': 'bar'}); // ignored