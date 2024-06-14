const http = require('http');
const fs  = require('fs');

const PORT = process.env.PORT || 3000; // port 80 is bydefault
// const hostname = "localhost";

const home = fs.readFileSync('./index.html','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const contact = fs.readFileSync('./contact.html','utf-8');
const service = fs.readFileSync('./service.html','utf-8');

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(home);
    }
    if(req.url==="/about"){
        return res.end(about);
    }
    if(req.url==="/contact"){
        return res.end(contact);
    }
    if(req.url==="/service"){
        return res.end(service);
    }
    else{
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`);
});
