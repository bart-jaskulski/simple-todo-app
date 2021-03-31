<?php
/**
 * Plugin Name: Simple products export for WooCommerce
 * Plugin URI: https://www.wpdesk.net/products/simple-products-export/
 * Description: Simple products export for WooCommerce
 * Product: Simple products export for WooCommerce
 * Version: 1.0
 * Author: WP Desk
 * Author URI: https://www.wpdesk.net/
 * Text Domain: simple-products-export
 * Domain Path: /lang/
 *
 * @package \Simpl\ToDoApp;
 */

namespace Simpl\ToDoApp;

class Plugin implements Hookable {

	private $ajax;

	private $shortcode;

	public function __construct() {
		$this->ajax = new Ajax();
		$this->shortcode = new Shortcode();
	}

	public function hook() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );
	}

	public function wp_enqueue_scripts() {
		if ( $this->pageHasToDoShortcode() ) {
			wp_enqueue_script( 'simple-todo-app', trailingslashit( __DIR__ ) . 'assets/index.js', array(), '', true );
			wp_localize_script( 'simple-todo-app', 'todoApp', array(
				'ajaxUrl' => wp_admin( 'admin-ajax.php' ),
				'nonce' => wp_create_nonce( '_todo_nonce' ),
			) );

			wp_enqueue_style( 'simple-todo-app', trailingslashit( __DIR__) . 'assets/style.css' );
		}
	}

	private function pageHasToDoShortcode() {
		global $post;
		return has_shortcode( $post->post_content, 'simple-todo-app' );
	}
}
