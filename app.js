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
  let res = list.filter(item => item.includes(domain));
  const total = res.length;
  res = res.slice(0, 30);
  socket.emit('search', { res, total });
});

const home = get('/', ctx => ctx.res.render('index'));
server(home).then(app => socket.attach(app.original));
