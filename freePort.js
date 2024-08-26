const net=require('node:net');

function findAbiablePort(desiredPort){
    return new promise((resolve,reject)=>{
        const server = net.createServer()

        server.listen(desiredPort,()=>{
            const {port} = server.address();
            server.close(()=>{
                resolve(port)            })
        })
        resolve(0)

        server.on('error',(err)=>{
            if(err.code === 'EADDRINUSE'){
                findAbiablePort(0).then(port => resolve(port))
            }else{
                reject(err);
            }
        })
    })
}

modile.exports = {findAbiablePort}