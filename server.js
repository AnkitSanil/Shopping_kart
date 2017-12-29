'use strict'


var express = require('express');
var app = express();

// app.use lets us to define the relative path for the entire directory tree.. 
// that is  -------
// here  __dirname: C:\Users\Ankit\Desktop\workplace\Shopping_kart  
// therefore this --dirname + /public is directly assigned to  '/public'
app.use('/public',express.static(__dirname + '/public'));  

// app.use is again used to assign a path __dirname
// app.use('/style',express.static(__dirname ));


app.use('/node_modules',express.static(__dirname+ '/node_modules'));


// app.listen is used to assign a port for our project
app.listen('3000',function(){
    console.log(__dirname);
    console.log('Server running at http://localhost:3000!!');

})

// app.get is used to assign a path to the entire request and response that will be coming to our root directory
// we can also define the root path example :
// here main.html is the rootfile that will we uploaded during the load stage of the server. 
// that is when we go for http://localhost:3000/ -----> main.html
app.get('/',function(req,res){
    res.sendFile('main.html',{'root':__dirname + '/public'});
})