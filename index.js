
const http = require('https');
const fs = require('fs')

const server = http.createServer((req , res) => {
    let path = req.url;
    if(path === '/' || path.tolocalelowercase() === '/home') {
        res.end('you are in home page');
    } else if(path.tolocalelowercase() === '/about'){
        res.end('you are in contact page ');
    } else {
        res.end('error 404: page not found');
    }
});
server.listen(5000, '127.0.0.1' , () => {
    console.log('server has satrted');
})