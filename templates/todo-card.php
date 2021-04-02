<?php
/**
 * Template for todo cards.
 *
 * @package Simpl/ToDoApp
 */

?>

<ul id="todo" class="simpl-todo">
	<li class="todo__item">
		<span class="todo__faux-checkbox"></span>
		<form id="todo-form" method="post">
			<input class="todo__content" id="todo-input" type="text" name="new-item" value="" placeholder="<?php esc_attr_e( 'Enter new task here...', 'simple-todo-app' ); ?>" minlength="1" required>
			<label class="screen-reader-text" for="todo-input"><?php esc_html_e( 'Enter new task here...', 'simple-todo-app' ); ?></label>
		</form>
	</li>
	<?php foreach ( $todo_items as $item ) : ?>
		<li class="todo__item" id="<?php echo esc_attr( $item['id'] ); ?>">
			<input class="screen-reader-text" id="checkbox-<?php echo esc_attr( $item['id'] ); ?>" type="checkbox" <?php checked( $item['is_checked'] ); ?>>
			<label class="todo__faux-checkbox" for="checkbox-<?php echo esc_attr( $item['id'] ); ?>" aria-describedby="todo-content-<?php echo esc_attr( $item['id'] ); ?>"></label>
			<span class="todo__content" id="todo-content-<?php echo esc_attr( $item['id'] ); ?>" contenteditable><?php echo esc_html( $item['content'] ); ?></span>
			<button class="todo__remove" aria-label="<?php esc_html_e( 'Remove', 'simple-todo-app' ); ?>">❌</button>
		</li>
	<?php endforeach; ?>
</ul>
