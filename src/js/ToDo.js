import Item from './Item';
import Form from './Form';

export default class ToDo {

	constructor( el ) {
		this.el = el;
		this.itemsList = el.querySelectorAll( 'li' );
		this.form = new Form( el.getElementsByTagName('form')[0] );
		this.initialize();
	}

	/**
	 * Attach object intance to DOM to run event listeners.
	 */
	initialize() {
		this.itemsList.forEach( (item, i) => {
			if ( i === 0 ) return; // Skip first item, it's form.
			new Item( item );
		})
	}
}
