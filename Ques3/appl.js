var express = require('express');
var app = express();
var list = require('./student.json');

app.listen('3000', function(){
    console.log('server listening to port 3000');
});

app.get('/home', function (req, res) {
    res.send('welcome to express')    
})

app.get('/search',function(req,res){
    var name = req.query.name;
    var sublist =[];
    var flag =0;
    for(const i in list){
        if(list[i].uname == name){
            flag = 1;
            //sublist.push(list[i]);
            
            res.send('User name '+ list[i].uname+' found');
            
        }
    }
    //sublist.push(name);
    if(flag == 0)
        res.send('Welcome new user '+name+'');
        //res.send(name);
})





