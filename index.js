const express = require('express');
const app = express();
const port = 8080;

app.get('/home', function (req, res) {
    res.send('GET request to the homepage');
});
app.post('/home', function (req, res) {
    res.send("hello " + res.query.name);
});

app.listen( port,function () {
    console.log("Example app listening on port" + port);
});