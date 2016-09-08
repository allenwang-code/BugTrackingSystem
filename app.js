var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var formParser = bodyParser.urlencoded({ extended: false});

app.use('/static', express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title:'hey!', message:'Hi, There!'});
  //res.send('Great to see you again, dude');
});

app.post('/createBugList', formParser, function(req, res){
  console.log(req.body.description);
  response = {
    title:req.body.title,
    text:req.body.text,
    priority:req.body.priority
  };
  console.log(response);
  res.end(JSON.stringify(response));

})



app.listen(3000, function() {
  console.log('Allen Run in port 3000!');
});
