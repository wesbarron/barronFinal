var express = require('express');
var node = require('node-fetch');
var https = require('https');
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


var url = "https://csuserversidewebdevfinal.herokuapp.com/";

app.get("/", async function(req, res){
    
    var output = await fetch(url);
    var json = await output.json();
    res.send(<h1>Hello</h1>);
    /*
    res.render("index", {
        json: json
    });*/
});

app.listen(port, function(){

});