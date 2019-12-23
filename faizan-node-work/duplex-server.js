const net = require('telnet');

const handler = (socket) => {
    socket.setEncoding('utf8');
    socket.on('data',(chunk)=>{
        console.log(chunk);
        
    });
    console.log('socket connected');
}

socket.on('end', ()=>{
    console.log('Conenction Closed');
})

const server = net.createServer(handler);
server.listen(8000, ()=>{
    console.log('listening to port 8000');
})