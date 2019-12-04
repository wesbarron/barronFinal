var express = require('express');
var node = require('node-fetch');
var https = require('https');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

function getData(){
var url = "https://csuserversidewebdevfinal.herokuapp.com/";
var output = fetch(url);
var json = json(output);
}

app.get('/', function(req, res){
    
   // getData();
    res.send(json);
/*
    var title = json.title;
    var image = json.url;
    var description = json.explanation;
    var date = json.date;
    
    res.render("index", {
        title:title,
        image:image,
        description:description,
        date:date
    }); */
});

app.listen(port, function(){

});