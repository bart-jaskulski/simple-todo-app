import AbstractItem from './AbstractItem'

export default class Item extends AbstractItem {

	constructor( itemEl ) {
		super( itemEl );

		this.button = this.itemEl.querySelector( 'button' );
		this.checkbox = this.itemEl.querySelector( 'input[type="checkbox"]' );
		this.content = this.itemEl.querySelector( 'span' );

		this.button.addEventListener( 'click', this.removeItem )
		this.checkbox.addEventListener( 'change', this.doneItem )
		this.content.addEventListener( 'focusout', this.updateItem )
	}

	removeItem = () => {
		this.ajaxRequest.removeItem( this.itemEl.id )
		this.itemEl.remove()
	}

	updateItem = () => {
		this.ajaxRequest.updateItem( this.itemEl.id, {content: this.content.innerText} )
	}

	doneItem = () => {
		this.ajaxRequest.updateItem( this.itemEl.id, {isChecked: this.checkbox.checked} )
	}
}
