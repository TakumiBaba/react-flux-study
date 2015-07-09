import React from 'react';

window.React = React;

import TodoListComponent from './components/TodoList'

React.render(<TodoListComponent />, document.getElementById('app'));
