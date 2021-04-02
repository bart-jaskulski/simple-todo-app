<?php
/**
 * Main plugin class
 *
 * @package Simpl\ToDoApp
 */

namespace Simpl\ToDoApp;

/**
 * Main plugin class responsible for initializing all components.
 */
class Plugin extends Hook {

	/**
	 * Request class instance.
	 *
	 * @var Request
	 */
	private $request;

	/**
	 * Shortcode class instance.
	 *
	 * @var Shortcode
	 */
	private $shortcode;

	public function __construct() {
		parent::__construct();
		$this->request = new Request();
		$this->shortcode = new Shortcode();
	}

	public function hook() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
	}

	public function wp_enqueue_scripts() {
		if ( $this->pageHasToDoShortcode() ) {
			wp_enqueue_script( 'simple-todo-app', plugins_url( '../assets/main.js', __FILE__ ), array(), '1.0', true );
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

	public static function create_page_with_shortcode() {
		if ( post_exists( 'Bart Jaskulski – ToDo App' ) ) return;

		wp_insert_post(
			array(
				'post_title' => 'Bart Jaskulski – ToDo App',
				'post_content' => '[simple-todo-app]',
				'post_status' => 'publish',
				'post_type'	=> 'page',
			)
		);
	}

	private function pageHasToDoShortcode() {
		global $post;
		return has_shortcode( $post->post_content, 'simple-todo-app' );
	}
}
