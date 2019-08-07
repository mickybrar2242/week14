const http = require('http'); 

const site = http.createServer(function(req,res){
    console.log('hello world')
})
site.listen(3000);