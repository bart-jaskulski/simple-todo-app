<?php
/**
 *
 * @package Simpl/ToDoApp
 */

namespace Simpl\ToDoApp;

class Shortcode {

	public function __construct() {
		$this->create_shortcode();
	}

	public function create_shortcode() {
		add_shortcode( 'simple-todo-app', array( $this, 'display_shortcode_content' ) );
	}

	public function display_shortcode_content() {
		ob_start();
		$this->include_shortcode_template();
		return ob_get_clean();
	}

	private function include_shortcode_template() {
		$collection = new ItemsManager( get_the_ID() );
		$todo_items = $collection->get_items();

		require plugin_dir_path( __DIR__ ) . '/templates/todo-card.php';
	}
}
