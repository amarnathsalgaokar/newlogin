//dependent variable// //core modules
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

//User model
var usersController = require('./controllers/users');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
        
    }));
app.use(express.static('public'));

//Routes
app.get('/', function(request,response){
   // console.log(users.getUsers()+'this is it');
    response.render('index',{
        title: "Home",
        users: usersController.getUsers()});

});

app.get('/users/:id',
       function(request,response){
           var user = usersController.getUser(request.params.id);
           response.render('profile',{title:" user Profile",
               user:user
           });
           
       });

app.get('/home', function(request,response){
    response.render('index',{title:"index"});

});
app.get('/signup', function(request,response){
    response.render('signup',{title:"SignUp"});

});
app.get('/login', function(request,response){
    response.render('login',{title:"login"});

});


app.get('/about', function(request,response){
    response.render('about',{title:"about"});

});

app.post('/login', userController.postLogin );


app.listen(3000);

