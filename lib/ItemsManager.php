<?php

namespace Simpl\ToDoApp;

/**
 * CRUD class for storing todo list as post meta data.
 */
class ItemsManager {

	/**
	 * Store items with specified meta field key.
	 *
	 * @var string
	 */
	const META_FIELD = 'todo_tasks_list';

	/**
	 * Post to associate tasks list with.
	 *
	 * @var int
	 */
	private $post_id;

	/**
	 * Store items in object.
	 *
	 * @var array
	 */
	private $items;

	public function __construct( $post_id ) {
		$this->post_id = $post_id;
		$this->items = $this->get_items();
	}

	public function get_items() {
		if ( empty( $this->items ) ) {
			// Post meta value returns array with nested items.
			// We need to grab this inner array to append elements,
			// so focus on first array item if present.
			$this->items = get_post_meta( $this->post_id, self::META_FIELD )[0];
		}
		return $this->items;
	}

	public function create( $item_to_create ) {
		$items = $this->get_items();
		array_push( $items, $item_to_create );
		$this->update_meta( $items );
	}

	public function update( $item_to_update ) {
		$items = $this->get_items();
		$item_id = array_search( $item_to_update['id'], array_column( $items, 'id' ) );

		if ( '' !== $item_to_update['content'] ) {
			$items[ $item_id ]['content'] = $item_to_update['content'];
		}

		if ( '' !== $item_to_update['is_checked'] ) {
			$items[ $item_id ]['is_checked'] = $item_to_update['is_checked'];
		}

		$this->update_meta( $items );
	}

	/**
	 * Return filtered array where ID is search key.
	 *
	 * @param  array $item_to_remove
	 */
	public function delete( $item_to_remove ) {
		$updated_items = array_filter(
			$this->get_items(),
			function( $item ) use ( $item_to_remove ) {
				return $item['id'] !== $item_to_remove['id'];
			}
		);

		$this->update_meta( array_values( $updated_items ) );
	}

	private function update_meta( $items ) {
		update_post_meta( $this->post_id, self::META_FIELD, $items );
	}

}
