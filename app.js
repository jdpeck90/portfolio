/////////------SET UP VARIABLES------/////////
const exp = require("express");
const app = exp();

/////////------SET UP DATABASE------/////////
var mustacheExpress = require('mustache-express')

app.engine('html', mustacheExpress())
app.set('view engine','html')
app.set("views",__dirname + "/views");
app.use('/', exp.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('alive on 3k');
});

//show all users.
app.get('/', function(req, res){

    res.render('index');
  });

