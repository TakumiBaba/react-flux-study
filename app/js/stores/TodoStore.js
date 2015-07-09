'use strict';

import alt from '../alt';
import TodoActions from '../actions/Todo.action';

class TodoStore {
  constructor() {
    this.state = {
      todos: [{title : 'a'}]
    };
    this.bindActions(TodoActions);
  }

  add (todo) {
    console.log(todo);
    this.setState({todos: this.state.todos.concat(todo)});
  }

  getList (todos) {
    console.log(todos);
    this.setState({todos: todos});
  }

}

export default alt.createStore(TodoStore, "TodoStore");
