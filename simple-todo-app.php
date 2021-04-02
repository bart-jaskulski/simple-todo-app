<?php
/**
 * Plugin Name: Simple ToDo App for WordPress
 * Plugin URI: https://github.com/bart-jaskulski/simple-todo-app
 * Description: ToDo App for recruitment purposes.
 * Version: 1.0
 * Author: Bart Jaskulski
 * Author URI: https://bartjaskulski.com
 * Text Domain: simple-todo-app
 *
 * @package \Simpl\ToDoApp;
 */

require __DIR__ . '/vendor/autoload.php';

new \Simpl\ToDoApp\Plugin();

register_activation_hook( __FILE__, array( 'Simpl\ToDoApp\Plugin', 'create_page_with_shortcode' ) );
