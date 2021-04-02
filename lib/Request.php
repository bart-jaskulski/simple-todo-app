<?php
//phpcs:disable WordPress.Security.NonceVerification.Missing

namespace Simpl\ToDoApp;

/**
 * Makes request to admin-ajax and returns currently processed item.
 */
class Request extends Hook {

	public function hook() {
		add_action( 'wp_ajax_process_todo', array( $this, 'process_todo_call' ) );
		add_action( 'wp_ajax_nopriv_process_todo', array( $this, 'process_todo_call' ) );
	}

	public function process_todo_call() {
		if ( ! $this->validate_todo_call() ) return;

		$post_id = isset( $_POST['postID'] ) ? absint( $_POST['postID'] ) : 0;
		$collection = new ItemsManager( $post_id );

		$item_params = $this->setup_parameters();

		$action_type = isset( $_POST['actionType'] ) ? sanitize_text_field( wp_unslash( $_POST['actionType'] ) ) : '';

		switch ( $action_type ) {
			case 'create':
				$collection->create( $item_params );
				break;
			case 'update':
				$collection->update( $item_params );
				break;
			case 'delete':
				$collection->delete( $item_params );
				break;
			default:
				throw new Exception( __( 'Requested action not allowed.', 'simple-todo-app' ) );
				break;
		}

		wp_send_json_success( $item_params );
	}

	/**
	 * Sanitize needed POST parameters and setup an array with item's properties.
	 *
	 * @return array
	 */
	private function setup_parameters() {
		$id = isset( $_POST['id'] ) ? sanitize_html_class( wp_unslash( $_POST['id'] ) ) : '';
		$content = isset( $_POST['content'] ) ? sanitize_text_field( wp_unslash( $_POST['content'] ) ) : '';
		$is_checked = isset( $_POST['isChecked'] ) ? sanitize_key( $_POST['isChecked'] ) : false;

		$item_params = array(
			'id' => $id,
			'content' => $content,
			'is_checked' => $is_checked,
		);

		return $item_params;
	}

	/**
	 * Validate nonce.
	 *
	 * @return bool
	 */
	private function validate_todo_call() {
		return isset( $_POST['nonce'] ) && wp_verify_nonce( wp_unslash( $_POST['nonce'] ), '_todo_nonce' );
	}
}
