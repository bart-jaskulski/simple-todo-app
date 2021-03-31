<?php
/**
 * Template for todo cards.
 *
 * @package Simpl/ToDoApp
 */
?>

<ul id="todo">
	<?php foreach( $items as $item ) : ?>
		<li>
			<input type="checkbox" id="todo-item-<?= $id ?>">
			<label class="faux-checkbox" for="todo-item-<?= $id ?>" aria-describedby="todo-content<?= $id ?>"></label>
			<span id="todo-content-<?= $id ?>" contendeditable><?php echo esc_html( $item ); ?></span>
		</li>
	<?php endforeach; ?>
</ul>
