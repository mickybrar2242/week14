var express = require('express');
var app = express()

app.get('/', function(req, res) {
res.send('

Hello Word!
')
})

app.get('/', function(req, res) {
res.send('WHATS there')
})

app.listen(3000)