const http = require('http'); 

const site = http.createServer(function(req,res){
    console.log('hello world')
    res.setHeader('content-type','text/html');
    console.log(req.rawHeader);
    
    res.end("what should i do here");
})
site.listen(3000);