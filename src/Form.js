import Ajax from './Ajax';
import Item from './Item';

export default class Form {
	constructor( formEl ) {
		this.formEl = formEl;

		this.formEl.addEventListener( 'submit', this.formHandler );
	}

	formHandler = e => {
		e.preventDefault();

		let formData = new FormData( this.formEl );

		let ajax = new Ajax();
		const todo = document.getElementById( 'todo' )
		let id = `item-${todo.childElementCount}`;

		ajax.createItem( id, formData.get('new-item') )
				.then( result => {
					if ( result.success ) {
							let item = Item.createHtmlElement( result.data.content, result.data.id )
							todo.appendChild( item.toString() )
							this.formEl.firstElementChild.value = ''
					}
				} )
	}
}
