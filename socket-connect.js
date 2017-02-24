// Create a socket middleware for the router
const socketIO = require('socket.io');

let listeners = {};

// Attach one listener to the listeners
// TODO: accept several listeners
module.exports = function(name, listener){

  // Make sure that there is something to push to
  listeners[name] = listeners[name] || [];

  // Add the listeners
  listeners[name].push(listener);

  return (req, res, next) => next();
};


module.exports.attach = original => {
  const io = socketIO(original);

  io.on('connect', socket => {
    for (name in listeners) {
      listeners[name].forEach(cb => {
        socket.on(name, (...args) => {
          cb(args, socket, io);
        });
      });
    }
  });
};
