const net = require("net");

const client = net.connect({
    port:1337,
    host:'172.16.17.223'
}, ()=>{
    process.stdin.pipe(client).pipe(process.stdout)
});