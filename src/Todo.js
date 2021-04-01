import Item from './Item'
import Form from './Form'

export default class ToDo {

	constructor( el ) {
		this.el = el;

		this.form = new Form( el.getElementsByTagName('form')[0] )

		this.itemsList = el.querySelectorAll( 'li' );

		this.initialize();
	}

	initialize() {
		this.itemsList.forEach( (item, i) => {
			if ( i === 0 ) {
				return;
			}

			new Item( item )
		})
	}

	applyUpdate() {}

	getItems() {}
}
