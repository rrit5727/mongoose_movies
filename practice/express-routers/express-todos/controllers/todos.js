const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit
}

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos'
    })
} 

function show(req, res){
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-do details' 
    });
}

function newTodo(req, res) {
    res.render('todos/new', {title: 'new To-do'});
}

function create(req, res) {
    console.log(req.body);
    Todo.create(req.body);
    res.redirect('/todos');
}

function deleteTodo(res, req) {
    Todo.deleteTodo(req.params.id);
    res.redirect('/todos');
}

function edit(res, req) {
    res.render('todos/edit', {title: 'edit To-do'})
}