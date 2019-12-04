var express = require('express');
var node = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

function getData(){
    var url = "https://csuserversidewebdevfinal.herokuapp.com/";

    var output = fetch(url);
    var json = output.json();
}


app.get("/", function(req, res){
    
    getData();
    res.send(json);
    res.render("index", {
        json: json
    });
});

app.listen(port, function(){

});