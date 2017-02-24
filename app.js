const server = require('server');
const { get, post } = server.router;
const socket = require('./socket-connect');
const fs = require('fs');

let list = [];
fs.readFile(__dirname + '/domains.txt', 'utf-8', (err, file) => {
  if (err) return console.log(err);
  list = file.split(/\s+/g);
});

socket('search', ([data], socket, io) => {
  if (!data.domain) {
    return socket.emit('search', { res: [], total: 0 });
  }
  const domain = data.domain.toLowerCase();

  // Lightweight request (full domain is a match):
  if (list.includes(domain)) {
    socket.emit('search', { res: [domain], total: 1 });
    return;
  }

  // Full-list search
  const res = list.filter(item => item.includes(domain));
  socket.emit('search', { res: res.slice(0, 30), total: res.length });
});

const home = get('/', ctx => ctx.res.render('index'));
server(home).then(app => socket.attach(app.original));
