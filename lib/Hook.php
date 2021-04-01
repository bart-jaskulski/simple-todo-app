<?php

namespace Simpl\ToDoApp;

abstract class Hook implements Hookable {
	public function __construct() {
		$this->hook();
	}

	abstract public function hook();
}
