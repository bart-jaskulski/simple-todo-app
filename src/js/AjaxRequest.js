export default class AjaxRequest {

	/**
	 * Alway send WP AJAX as urlencoded.
	 * @type {String}
	 */
	CONTENT_TYPE = 'application/x-www-form-urlencoded';
	/**
	 * Action name associated with AJAX endpoint.
	 * @type {String}
	 */
	ACTION = 'process_todo';
	NONCE = todoApp.nonce;
	POST_ID = todoApp.currentPost;
	AJAX_URL = todoApp.ajaxUrl;

	removeItem( id ) {
		return this.modifyToDo({
			actionType: 'delete',
			id: id
		});
	}

	updateItem( id, contentOrCheckbox ) {
		return this.modifyToDo({
			actionType: 'update',
			id: id,
			...contentOrCheckbox,
		})
	}

	createItem( id, content ) {
		return this.modifyToDo({
			actionType: 'create',
			id: id,
			content: content
		})
	}

	/**
	 * Delegate request and return formatted response.
	 *
	 * @param  {Object} requestBody
	 * @return {Promise} Awaiting for formatted response.
	 */
	async modifyToDo( requestBody ) {
		let modifyRequest = await this.#sendModifyRequest( requestBody )
		return await modifyRequest.json()
	}

	/**
	 * Fetch API wrapper.
	 *
	 * @param {Object} requestBody
	 * @return {Promise}
	 */
	#sendModifyRequest( requestBody ) {
		return fetch(
			this.AJAX_URL,
			{
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': this.CONTENT_TYPE
				},
				body: this.#buildQuery( requestBody )
			}
		);
	}

	/**
	 * Create fetch body with arguments as URL string.
	 *
	 * @param {Object} queryArguments
	 * @return {String}
	 */
	#buildQuery( queryArguments ) {
		queryArguments = Object.assign(
			{
				actionType: '',
				id: '',
				content: '',
				isChecked: false,
			},
			queryArguments
		)

		return new URLSearchParams( {
			action: this.ACTION,
			nonce: this.NONCE,
			postID: this.POST_ID,
			...queryArguments
		} )
	}

}
