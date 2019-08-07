const http = require('http'); 

const site = http.createServer(function(req,res){
    console.log('hello world')
    res.setHeader('content-type','text/html');
    console.log(req.rawHeader);
    
    res.end("<h1>what should i do here</h1>");
})
site.listen(3000);