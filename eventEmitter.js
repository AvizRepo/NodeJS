var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler1 = function () {
  console.log('I can see notification1!');
}

var myEventHandler2 = function () {
  console.log('I can see notification2!');
}

eventEmitter.on('notify1', myEventHandler1);

eventEmitter.on('notify2', myEventHandler2);

eventEmitter.emit('notify1');
eventEmitter.emit('notify2');