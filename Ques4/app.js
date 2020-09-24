var express = require('express');
var app = express();
var list = require('./hotel.json');

app.listen('3000', function(){
    console.log('server listening to port 3000');
});

app.get('/showhotel', function(req,res){
    var slist=[];
    for(const i in list){
        slist.push(list[i].name);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(slist);
})

app.get('/hotelcity', function(req,res){
    var slist=[];
    var clist=[];
    for(const i in list){
        slist.push(list[i].name);
        slist.push(list[i].city);
        
    }
   res.send(slist);
   res.send(clist);
})



