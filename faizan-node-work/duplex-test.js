const net = require('telnet');

net.createServer(socket => {
    socket.pipe(socket)
}).listen(8001);