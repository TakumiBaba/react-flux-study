import alt from '../alt';

class MyClassAction {

	actionMyClass(param) {
		this.dispatch(param);
	}

}

export default alt.createActions(MyClassAction);
