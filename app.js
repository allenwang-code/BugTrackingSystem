var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title:'hey!', message:'Hi, There!'});
  //res.send('Great to see you again, dude');
});





app.listen(3000, function() {
  console.log('Allen Run in port 3000!');
});
