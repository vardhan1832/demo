const http = require('http');
const fs = require('fs');
let message = '';
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.write('<html>')
        res.write(`<body>${message}<br><form action="/message" method="POST"><input type="text" name="message"><button>submit</button></form></body>`)
        res.write('</html>')
        return res.end();
    } 
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            message = parsedBody.split('=')[1];      
            fs.writeFile('message.txt', message , nxt=>{
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        })     
    }
})
server.listen(4000);
