var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var favicon = require("serve-favicon")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var routes = require("./routes/index")
var users = require("./routes/users")

var formParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

app.use(formParser)
app.use(jsonParser)
app.use(logger('dev'))
app.use(favicon(__dirname + "/public/favicon.ico"))
app.use('/static', express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title:'hey!', message:'Hi, There!'})
  //res.send('Great to see you again, dude');
})

app.post('/createBugList', function(req, res){
  console.log(req.body.description)
  response = {
    title:req.body.title,
    text:req.body.text,
    priority:req.body.priority
  }
  console.log(response)
  res.end(JSON.stringify(response))

})



app.listen(3000, function() {
  console.log('Allen Run in port 3000!');
});
