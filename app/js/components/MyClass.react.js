import React from 'react';

import MyClassStore from '../stores/MyClass.store';
import MyClassAction from '../actions/MyClass.action';
import TodoItem from './TodoList'

class MyClass extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		MyClassStore.listen(this.onChange.bind(this));
		MyClassAction.actionMyClass();
	}

	componentWillUnmount() {
		MyClassStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {

		return <div>{ this.state.param }</div>
	}

}

export default MyClass;
