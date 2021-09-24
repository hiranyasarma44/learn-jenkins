import http from 'http'

const server = http.createServer((req, res) => {
    res.end('ok')
})

server.listen(8080,()=>{
    console.log('http://localhost:8080/');
})