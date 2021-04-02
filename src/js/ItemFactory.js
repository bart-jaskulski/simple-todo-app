import Item from './Item';

export default class ItemFactory {

	static createHtmlElement( content, id, isChecked = false ) {
		const li = ItemFactory.#createLiElement( id );

		const checkbox = ItemFactory.#createCheckboxElement( id, isChecked )
		const label = ItemFactory.#createLabelElement( id );
		const span = ItemFactory.#createSpanElement( id, content );
		const button = ItemFactory.#createButtonElement();

		li.appendChild( checkbox )
		li.appendChild( label )
		li.appendChild( span )
		li.appendChild( button )

		return new Item( li )
	}

	static #createLiElement( id ) {
		const li = document.createElement( 'li' )
		li.id = id;
		li.className = 'todo__item'

		return li;
	}

	static #createCheckboxElement( id, isChecked ) {
		const checkbox = document.createElement( 'input' )
		checkbox.type = 'checkbox';
		checkbox.id = `checkbox-${id}`;
		checkbox.checked = isChecked;
		checkbox.className = 'screen-reader-text'

		return checkbox;
	}

	static #createLabelElement( id ) {
		const label = document.createElement( 'label' )
		label.htmlFor = `checkbox-${id}`;
		label.className = 'todo__faux-checkbox'
		label.setAttribute( 'aria-describedby', `todo-content-${id}` );

		return label;
	}

	static #createSpanElement( id, content ) {
		const span = document.createElement( 'span' )
		const itemContent = document.createTextNode( content )
		span.contentEditable = true;
		span.id = `todo-content-${id}`;
		span.className = 'todo__content'
		span.appendChild( itemContent )

		return span;
	}

	static #createButtonElement() {
		const button = document.createElement( 'button' )
		button.appendChild( document.createTextNode( '❌' ) )
		button.setAttribute( 'aria-label', 'Remove' );
		button.className = 'todo__remove'

		return button;
	}
}
