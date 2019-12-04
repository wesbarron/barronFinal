var express = require('express');
var node = require('node-fetch');
var https = require('https');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

async function getData(){
var url = "https://csuserversidewebdevfinal.herokuapp.com/";
var output = await fetch(url);
var json = await output.json();
}

app.get('/', function (req, res){
    
    getData();

    var title = json.title;
    var image = json.url;
    
    res.render("index", {
        title:title,
        image:image,

    });
});

app.listen(port, function(){

});