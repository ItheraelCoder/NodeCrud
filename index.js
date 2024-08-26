const http = require('node:http');

const server = http.createServer((req, res)=>{
    console.log('server received');
    res.end('hello world')
});

const port = 0;

server.listen(port, ()=>{
    console.log(`server on port http://localhots:${server.address().port}`)
});

