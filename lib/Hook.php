<?php

namespace Simpl\ToDoApp;

/**
 * Let other components integrate with WordPress by hooks.
 */
abstract class Hook {

	/**
	 * Fire hooks on object creation.
	 */
	public function __construct() {
		$this->hook();
	}

	/**
	 * Method to implement for classes responsible for integrating with WordPress hook system.
	 */
	abstract public function hook();
}
