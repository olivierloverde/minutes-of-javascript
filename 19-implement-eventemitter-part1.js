// Minutes of Javascript #19 - How to implement a local EventEmitter? (part 1.)
// See: https://playcode.io/655981/

// First create a new class called "EventEmitter"
class EventEmitter {
    constructor() { // Let's register a Map() for storing (event, callbacks[]) values
        this.callbackMap = new Map(); // We use a map so we can pass anything as key (an object uses string as key)
    }

    // The .on() method is storing (event, callback) in our in-memory map
    on(event, cb) {
        const callbacks = this.callbackMap.get(event);
        this.callbackMap.set(event, callbacks ? [...callbacks, cb] : [cb]);
    }

    // The .emit() method is calling all registered callbacks for a given event
    emit(event, data) {
        const callbacks = this.callbackMap.get(event);
        if (!Array.isArray(callbacks)) return; // returns early

        callbacks.map((callback) => callback(data));
    }
}
module.exports = EventEmitter;
  
// Now let's use it
const myEventEmitter = new EventEmitter();
myEventEmitter.on('event', (data) => console.info('listener #1', data));
myEventEmitter.on('event', (data) => console.info('listener #2', data));
myEventEmitter.emit('event', {'foo': 'bar'}); 
/*
    listener #1 { foo: 'bar' }
    listener #2 { foo: 'bar' }
*/