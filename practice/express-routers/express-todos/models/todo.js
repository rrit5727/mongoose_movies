
const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne    
  };
	
  function getAll() {
    return todos;
  }

  function getOne(id) {
    id = parseInt(id);
    return todos.find(function(todo) {
      return todo.id === id
    })
  }

 function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
 }
  
 function deleteOne(id) {
  id = parseInt(id);
  const idx = todos.findIndex(function(todo) {
    return todo.id === id;
  });
  todos.splice(idx, 1);
 }

 