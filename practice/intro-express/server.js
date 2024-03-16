const express = require('express');
const app = express();
const path = require('path');

const todoDb = require('./data/todo-db')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.send('<h1>Hello World</h1>')
});

app.get( '/home', function(req, res){
    res.render('home');
}); 

app.get('/todos', function(req, res){
    res.render('todos/index', {
        todos: todoDb.getAll()
    } )
})


app.listen(3001, function () {
    console.log('listening on port 3000')
});


