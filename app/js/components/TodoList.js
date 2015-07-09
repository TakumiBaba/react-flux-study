'use strict';

import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/Todo.action';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    TodoAction.getList();
  }

  static getStores() {
    return [TodoStore];
  }

  static getPropsFromStores() {
    return TodoStore.getState();
  }

	onChange(state) {
		this.setState(state);
	}

	render() {
    console.log(this);
    let todos = this.state.todos;
    let todoItems = null;
    if(todos.length > 0){
      todoItems = todos.map((todo, i)=> {
        console.log(todo);
        console.log(i);
  			return (
          <div>
  			    <TodoItem key={i} title={todo.title} />
          </div>
  			);
  		});

    }
    console.log(todoItems);
    return (
      <div>
        {todoItems}
      </div>
    );
	}

}

export default connectToStores(TodoList);
