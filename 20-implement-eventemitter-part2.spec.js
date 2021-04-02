// Minutes of Javascript #20 - How to implement a local EventEmitter? (part 2.)
// See: https://playcode.io/655996/

// use your own path to the code of the first part
const EventEmitter = require('./19-implement-eventemitter-part1'); 

describe('EventEmitter', () => {
    let cb1, cb2, cb3, eventEmitter;
    beforeEach(() => {
        cb1 = jest.fn();
        cb2 = jest.fn();
        cb3 = jest.fn();
        eventEmitter = new EventEmitter();
        eventEmitter.on('event', cb1);
    });

    it('Register a listener', () => {
        expect(eventEmitter.callbackMap.size).toBe(1);
        expect(eventEmitter.callbackMap.get('event')).toStrictEqual([cb1]);
    });

    it('Stack listeners if same key used', () => {
        eventEmitter.on('event', cb2);

        expect(eventEmitter.callbackMap.size).toBe(1);
        expect(eventEmitter.callbackMap.get('event')).toStrictEqual([cb1,cb2]);
    });

    it('Separate listeners if keys are different', () => {
        eventEmitter.on('event2', cb2);

        expect(eventEmitter.callbackMap.size).toBe(2);
        expect(eventEmitter.callbackMap.get('event')).toStrictEqual([cb1]);
        expect(eventEmitter.callbackMap.get('event2')).toStrictEqual([cb2]);
    });

    it('trigger all callbacks when event is emitted', () => {
        const data = {'foo': 'bar'};
        eventEmitter.on('event', cb2);
        eventEmitter.on('event2', cb3);
        eventEmitter.emit('event', data);

        expect(cb1).toHaveBeenCalledWith(data);
        expect(cb2).toHaveBeenCalledWith(data);
        expect(cb3).not.toHaveBeenCalled();
    });
});
