import AbstractItem from './AbstractItem';
import ItemFactory from './ItemFactory';

export default class Form extends AbstractItem {

	constructor( itemEl ) {
		super( itemEl )

		this.itemEl.addEventListener( 'submit', this.formHandler );
	}

	formHandler = e => {
		e.preventDefault();
		const formData = new FormData( this.itemEl );
		const id = this.#createNewItemId();
		this.ajaxRequest
			.createItem( id, formData.get('new-item') )
			.then( this.#createItemAfterAjax )
	}

	/**
	 * Get last todo item id and increment it's value by one to use for new element.
	 * If container has only one element, start counting with 1.
	 *
	 * @return {String}
	 */
	#createNewItemId() {
		if ( this.container.childElementCount <= 1 ) return `item-1`;

		let lastElementId = this.container.lastElementChild.id;
		let lastIdNum = Number(lastElementId.split( '-' )[1]);
		return `item-${++lastIdNum}`;
	}

	#createItemAfterAjax = result => {
		const { success, data } = result;
		if ( success ) {
				let item = ItemFactory.createHtmlElement( data.content, data.id )
				this.container.appendChild( item.toString() )
				this.#clearFormInput();
		}
	}

	#clearFormInput() {
		this.itemEl.firstElementChild.value = ''
	}
}
