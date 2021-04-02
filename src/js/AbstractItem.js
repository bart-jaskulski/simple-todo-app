import AjaxRequest from './AjaxRequest'

export default class AbstractItem {
	container = document.getElementById('todo');
	ajaxRequest = new AjaxRequest();

	constructor( itemEl ) {
		this.itemEl = itemEl;
	}

	toString() {
		return this.itemEl;
	}
}
