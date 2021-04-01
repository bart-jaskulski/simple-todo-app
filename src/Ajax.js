export default class Ajax {

	removeItem( id ) {
		return this.modifyToDo( 'delete', { id: id } );
	}

	updateItem( id, isChecked ) {
		return this.modifyToDo( 'update', { id: id, isChecked: isChecked })
	}

	updateContent( id, content ) {
		return this.modifyToDo( 'update', { id: id, content: content })
	}

	createItem( id, content ) {
		return this.modifyToDo( 'create', { id: id, content: content } )
	}

	async modifyToDo( actionType, itemData ) {
		itemData = {
			actionType: actionType,
			...itemData,
		}
		let modifyRequest = await fetch(
			todoApp.ajaxUrl,
			{
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: this.buildQuery( itemData )
			}
		)

		let itemsList = await modifyRequest.json()
		return itemsList
	}

	buildQuery( queryArguments ) {
		queryArguments = Object.assign(
			{
				content: '',
				isChecked: false,
				id: '',
			},
			queryArguments
		)

		return new URLSearchParams( {
			action: 'process_todo',
			nonce: todoApp.nonce,
			postID: todoApp.currentPost,
			...queryArguments
		} )
	}

}
