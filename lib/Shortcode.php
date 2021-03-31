<?php
/**
 *
 * @package Simpl/ToDoApp
 */

namespace Simpl\ToDoApp;

class Shortcode {

	public function createShortcode() {
		add_shortcode( 'simple-todo-app', array( $this, 'showShortcodeContent' ) );
	}

	public function showShortcodeContent() {
		ob_start();
		require trailingslashit( __DIR__ ) . 'templates/todo-card.php';
		$content = ob_get_clean();
		return $content;
	}
}
