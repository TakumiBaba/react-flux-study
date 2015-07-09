import alt from '../alt';

import MyClassAction from '../actions/MyClass.action';

class MyClassStore {

	constructor() {
		this.param = null;

		this.bindListeners({
			handleActionMyClass: MyClassAction.ACTION_MY_CLASS
		});
	}

	handleActionMyClass(param) {
		this.param = param;
	}

}

export default alt.createStore(MyClassStore, 'MyClassStore');
