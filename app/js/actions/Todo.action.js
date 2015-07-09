'use strict';

import alt from '../alt';

export default class TodoAction {
  add(todo) {
    this.dispatch(todo);
  }
  getList() {
    let todos =  [
      {title: 'a'},
      {title: 'b'},
      {title: 'c'},
      {title: 'd'},
      {title: 'e'},
      {title: 'f'},
      {title: 'g'},
      {title: 'h'},
    ];
    this.dispatch(todos);
  }

  update() {

  }

  delete() {

  }

  done() {

  }
}
export default alt.createActions(TodoAction);
