<?php

class HotkeySearchConfig extends ModuleConfig {
	public function getDefaults() {
		return array(
			'key_search' => 's',
			'key_trigger' => 'enter',
		);
	}
	public function getInputfields() {
		$inputfields = parent::getInputfields();
		$modules = wire('modules');

		$f = $modules->get('InputfieldMarkup');
		$f->attr('name', 'info');
		$f->label = 'Info';
		$markup = "
		<p>This module uses Mousetrap for key bindings. See the <a href='https://craig.is/killing/mice' target='_blank'>documentation</a> for supported keys.</p>
		";
		$f->attr('value', $markup);
		$inputfields->add($f);

		$f = $modules->get('InputfieldText');
		$f->attr('name', 'key_search');
		$f->attr('size', 15);
		$f->label = 'Search';
		$f->description = 'Hot key to toggle scroll/focus to search.';
		$inputfields->add($f);

		$f = $modules->get('InputfieldText');
		$f->attr('name', 'key_trigger');
		$f->attr('size', 15);
		$f->label = "Trigger result";
		$f->description = "Hot key to trigger link of focused search result.";
		$inputfields->add($f);

		return $inputfields;
	}
}