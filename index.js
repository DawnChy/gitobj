var express=require("express"),
    app=express(),
    // favicon=require("serve-favicon"),
    path=require('path');

app.use(require('body-parser')());

app.set('port',process.env.PORT||3006);

app.use(express.static(__dirname+'/public'));

// app.use(favicon(path.join(__dirnaem,'/public','favicon.ico')));

app.get('/',function (req,res) {
    res.type('text/html');
    res.send('welcome');
});

app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('404 not found');
});

app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 server error');
});

app.listen(app.get('port'),function () {
    console.log('Started on http://localhost:'+app.get('port')+';press Ctrl-C to Exit.');
});
