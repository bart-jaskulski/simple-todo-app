<?php

namespace Simpl\ToDoApp;

class Plugin extends Hook {

	private $ajax;

	private $shortcode;

	public function __construct() {
		parent::__construct();
		$this->ajax = new Ajax();
		$this->shortcode = new Shortcode();
	}

	public function hook() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
	}

	public function wp_enqueue_scripts() {
		if ( $this->pageHasToDoShortcode() ) {
			wp_enqueue_script( 'simple-todo-app', plugins_url( '../assets/main.js', __FILE__ ), array(), '', true );
			wp_localize_script(
				'simple-todo-app',
				'todoApp',
				array(
					'ajaxUrl' => admin_url( 'admin-ajax.php' ),
					'nonce' => wp_create_nonce( '_todo_nonce' ),
					'currentPost' => get_the_ID(),
				)
			);

			wp_enqueue_style( 'simple-todo-app', plugins_url( '../assets/main.css', __FILE__ ) );
		}
	}

	private function pageHasToDoShortcode() {
		global $post;
		return has_shortcode( $post->post_content, 'simple-todo-app' );
	}
}
