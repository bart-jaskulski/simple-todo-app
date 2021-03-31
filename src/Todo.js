import Item from './Item'

export default class ToDo {

	async modifyToDo( actionType ) {
		let modifyRequest = await fetch(
			todoApp.ajaxUrl,
			{
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: new URLSearchParam(
					{
						action: 'process_todo',
						nonce: todoApp.nonce,
						actionType: actionType,
					}
				)
			}
		)

		let itemsList = await modifyRequest.json()

		return itemsList
	}

	applyUpdate() {

	}

	getInitialState() {}

	getItems() {
	}
}
