var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db=mongojs('lti',['emp']);
app.use(express.static(__dirname));
//service call for list users
app.get('/list',function(req,res){
db.emp.find(function(err,docs){res.json(docs);})
});

app.get('/:id',function(req,res){
console.log(req.params.id);
db.emp.find({"_id":parseInt(req.params.id)},function(err,docs){res.json(docs);})
});


app.listen(3000);
console.log("server running on port 3000")


C:\Users\LTI.INFVA06880>node "D:\NODEJSDATA\day7\node-express.js"