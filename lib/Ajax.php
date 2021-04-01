<?php

namespace Simpl\ToDoApp;

class Ajax extends Hook {

	public function hook() {
		add_action( 'wp_ajax_process_todo', array( $this, 'process_todo_call' ) );
		add_action( 'wp_ajax_nopriv_process_todo', array( $this, 'process_todo_call' ) );
	}

	public function process_todo_call() {
		// if ( ! $this->validate_todo_call() ) {
		// return;
		// }

		$post_id = isset( $_POST['postID'] ) ? absint( $_POST['postID'] ) : 0;
		$collection = new ToDoCollection( $post_id );

		$item_params = $this->setup_parameters();

		switch ( $_POST['actionType'] ) {
			case 'create':
				$collection->create( $item_params );
				break;
			case 'update':
				$collection->update( $item_params );
				break;
			case 'delete':
				$collection->delete( $item_params );
				break;
		}

		wp_send_json_success( $item_params );
	}

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

	private function validate_todo_call() {
		return isset( $_POST ) && ! wp_verify_nonce( $_POST['nonce'], '_todo_nonce' );
	}
}
