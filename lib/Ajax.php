<?php

namespace Simpl\ToDoApp;

class Ajax implements Hookable {

	public function hook() {
		add_action( 'wp_ajax_process_todo', array( $this, 'process_todo_call' ) );
		add_action( 'wp_ajax_nopriv_process_todo', array( $this, 'process_todo_call' ) );
	}

	public function process_todo_call() {
		if ( ! $this->validate_todo_call() ) {
			return;
		}
	}

	private function validate_todo_call() {
		return isset( $_POST ) && ! verify_nonce( $_POST['nonce'], '_todo_nonce' );
	}
}
