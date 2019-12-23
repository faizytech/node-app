const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
// });
// myEmitter.emit('error', new Error('whoops!'));

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');