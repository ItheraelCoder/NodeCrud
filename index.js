const http = require('node:http');

const server = http.createServer((req, res)=>{
    console.log('request received');
    res.end('hello world')
});

const port = 3000;

server.listen(port, ()=>{
    //console.log(`server on port http://localhots:${server.address().port}`)
    console.log('server on port '+ port)
});

