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
			<input class="todo__content" id="todo-input" type="text" name="new-item" value="" placeholder="<?php _e( 'Enter new task here...', 'simple-todo-app' ); ?>" minlength="1" required>
			<label class="screen-reader-text" for="todo-input"><?php _e( 'Enter new task here...', 'simple-todo-app' ); ?></label>
		</form>
	</li>
	<?php
	foreach ( $todo_items as $key => $item ) :
		$i = ++$key;
		?>
		<li class="todo__item" id="item-<?php echo esc_attr( $i ); ?>">
			<input class="screen-reader-text" id="item-checkbox-<?php echo esc_attr( $i ); ?>" type="checkbox" <?php checked( $item['is_checked'] ); ?>>
			<label class="todo__faux-checkbox" for="item-checkbox-<?php echo esc_attr( $i ); ?>" aria-describedby="todo-content-<?php echo esc_attr( $i ); ?>"></label>
			<span class="todo__content" id="todo-content-<?php echo esc_attr( $i ); ?>" contenteditable><?php echo esc_html( $item['content'] ); ?></span>
			<button class="todo__remove" aria-label="<?php esc_html_e( 'Remove', 'simple-todo-app' ); ?>">❌</button>
		</li>
	<?php endforeach; ?>
</ul>
