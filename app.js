var express = require('express');
var node = require('node-fetch');
var https = require('https');
var path = require('path');
var url = require('url');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

function getData(){
    var url = "https://csuserversidewebdevfinal.herokuapp.com/";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        return data
    });
    
}


app.get('/', function(req, res){
    
    var url = "https://csuserversidewebdevfinal.herokuapp.com/";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        res.send(data);
    });   


    var title = data.title;
    var image = data.url;
    var description = data.explanation;
    var date = data.date;
    
    res.render("index", {
        title:title,
        image:image,
        description:description,
        date:date
    }); 
});

app.listen(port, function(){

});