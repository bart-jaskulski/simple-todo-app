<?php
/**
 *
 * @package Simpl/ToDoApp
 */

namespace Simpl\ToDoApp;

class Shortcode {

	public function __construct() {
		$this->createShortcode();
	}

	public function createShortcode() {
		add_shortcode( 'simple-todo-app', array( $this, 'showShortcodeContent' ) );
	}

	public function showShortcodeContent() {
		ob_start();
		$collection = new ToDoCollection( get_the_ID() );
		$todo_items = $collection->get_items();
		require plugin_dir_path( __DIR__ ) . '/templates/todo-card.php';
		$content = ob_get_clean();
		return $content;
	}
}
