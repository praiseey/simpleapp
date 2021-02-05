var express =  require('express');
var cors = require('cors');
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');

// Date formatting with moment
const moment = require('moment');


const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');
app.use(ejsLayouts);

app.set('port', (process.env.PORT || 8080));

// INDEX PAGE
app.get('/', function(request, response) {
  response.send('Website working fine')
});

// GET ONE AUTHOR
app.get('/blog/author/:author_id', function(req, res, next) {
        // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
        // dummy author response - no need to call database
        var author = {"id": 1,"first_name":"Bob","last_name":"Smith","email":"bob@gmail.com"};
        // change id = 2 and test for when :author_id
        res.render('pages/author_detail', { title: 'Author Details', author: author, layout: 'layouts/detail'} );
});

// GET ALL AUTHORS
app.get('/blog/authors', function(req, res) {
          // Hard coding for simplicity. Pretend this hits a real database to get all authors in the system
         // dummy authors response - no need to call database
         var authors = [
           {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
          {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
          {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}];
        res.render('pages/author_list', { title: 'Author List', authors: authors, layout: 'layouts/detail'} );
});

// GET ONE USER
app.get('/blog/user/:user_id', function(req, res, next) {
    var user = {"id": 1, "first_name": "Sam", "last_name": "Bill", "username": "sammy", "email": "sammy@gmail.com", "date_of_birth": moment().format("06-06-1999"), "phone": "234-567-8901", "gender": "male", "created_dt": "02-02-2021", "stat": "inactive"};
    
    // var user = [
    //     {"id": 1, "first_name": "Sam", "last_name": "Bill", "username": "sammy", "email": "sammy@gmail.com", "date_of_birth": "06-06-1991", "phone": "234-567-8901", "gender": "male", "created_dt": "02-02-2021", "stat": "inactive"},
    //     {"id": 2, "first_name": "Madison", "last_name": "Gabe", "username": "maddy", "email": "maddy@gmail.com", "date_of_birth": "06-07-1993", "phone": "234-567-8901", "gender": "female","created_dt": "02-02-2021", "stat": "active"},
    //     {"id": 3, "first_name": "Tess", "last_name": "Smith", "username": "tessy", "email": "tessy@gmail.com", "date_of_birth": "07-08-1995", "phone": "234-567-8901", "gender": "female","created_dt": "02-03-2021", "stat": "inactive"},
    //     {"id": 4, "first_name": "Coco", "last_name": "Ben", "username": "coco", "email": "coco@gmail.com", "date_of_birth": "08-08-1997", "phone": "234-567-8901", "gender": "male","created_dt": "02-03-2021", "stat": "active"},
    //     {"id": 5, "first_name": "Allison", "last_name": "Jim", "username": "alli", "email": "alli@gmail.com", "date_of_birth": "08-10-1999", "phone": "234-567-8901", "gender": "female","created_dt": "02-04-2021", "stat": "inactive"}
    //     ];
    
    res.render('pages/user_detail', { title: 'User Details', user: user, layout: 'layouts/detail'});
    
});

// GET ALL USERS
app.get('/blog/users', function(req, res) {
    var users = [
        {"id": 1, "first_name": "Sam", "last_name": "Bill", "username": "sammy", "email": "sammy@gmail.com", "date_of_birth": "06-06-1991", "phone": "234-567-8901", "gender": "Male", "created_dt": "02-02-2021", "stat": "Inactive"},
        {"id": 2, "first_name": "Madison", "last_name": "Gabe", "username": "maddy", "email": "maddy@gmail.com", "date_of_birth": "06-07-1993", "phone": "234-567-8901", "gender": "Female","created_dt": "02-02-2021", "stat": "Active"},
        {"id": 3, "first_name": "Tess", "last_name": "Smith", "username": "tessy", "email": "tessy@gmail.com", "date_of_birth": "07-08-1995", "phone": "234-567-8901", "gender": "Female","created_dt": "02-03-2021", "stat": "Inactive"},
        {"id": 4, "first_name": "Coco", "last_name": "Ben", "username": "coco", "email": "coco@gmail.com", "date_of_birth": "08-08-1997", "phone": "234-567-8901", "gender": "Male","created_dt": "02-03-2021", "stat": "Active"},
        {"id": 5, "first_name": "Allison", "last_name": "Jim", "username": "alli", "email": "alli@gmail.com", "date_of_birth": "08-10-1999", "phone": "234-567-8901", "gender": "Female","created_dt": "02-04-2021", "stat": "Inactive"}
        ];
        res.render('pages/user_list', { title: 'User List', users: users, gender: ['Female', 'Male'], stat: ['Active', 'Inactive'], layout: 'layouts/detail'});
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});