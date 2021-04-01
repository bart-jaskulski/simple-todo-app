import Ajax from './Ajax';

export default class Item {

	ajax = new Ajax();

	constructor( itemEl ) {
		this.itemEl = itemEl;

		this.button = this.itemEl.querySelector( 'button' );
		this.checkbox = this.itemEl.querySelector( 'input[type="checkbox"]' );
		this.content = this.itemEl.querySelector( 'span' );

		this.listenUpdate()
		this.listenRemove()
		this.listenDone()
	}

	listenUpdate() {
		this.content.addEventListener( 'focusout', this.updateItem )
	}

	listenRemove() {
		this.button.addEventListener( 'click', this.removeItem )
	}

	listenDone() {
		this.checkbox.addEventListener( 'change', this.doneItem )
	}

	toString() {
		return this.itemEl;
	}

	static createHtmlElement( content, id, isChecked = false ) {
		const li = document.createElement( 'li' )
		li.id = id;
		li.className = 'todo__item'

		const label = document.createElement( 'label' )
		label.className = 'todo__faux-checkbox'

		const checkbox = document.createElement( 'input' )
		checkbox.type = 'checkbox';
		checkbox.checked = isChecked;
		checkbox.className = 'screen-reader-text'

		const span = document.createElement( 'span' )
		const itemContent = document.createTextNode( content )
		span.contentEditable = true;
		span.appendChild( itemContent )
		span.className = 'todo__content'

		const button = document.createElement( 'button' )
		button.appendChild( document.createTextNode( '❌' ) )
		button.setAttribute( 'aria-label', 'Remove' );
		button.className = 'todo__remove'

		li.appendChild( checkbox )
		li.appendChild( label )
		li.appendChild( span )
		li.appendChild( button )

		return new Item( li )
	}

	removeItem = () => {
		this.ajax.removeItem( this.itemEl.id )
		this.itemEl.remove()
	}

	updateItem = () => {
		this.ajax.updateContent( this.itemEl.id, this.content.innerText )
	}

	doneItem = () => {
		this.ajax.updateItem( this.itemEl.id, this.checkbox.checked )
	}
}
