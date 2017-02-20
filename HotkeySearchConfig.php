<?php

class HotkeySearchConfig extends ModuleConfig {
	public function getDefaults() {
		return array(
			'key_search' => 's',
			'key_tree' => 't',
		);
	}
	public function getInputfields() {
		$inputfields = parent::getInputfields();
		$modules = wire('modules');

		$f = $modules->get('InputfieldMarkup');
		$f->attr('name', 'info');
		$f->label = $this->_('Info');
		$this->_('');
		$markup = $this->_('<p>This module uses Mousetrap for key bindings. See the <a href="https://craig.is/killing/mice" target="_blank">documentation</a> for supported keys.</p>');
		$f->attr('value', $markup);
		$inputfields->add($f);

		$f = $modules->get('InputfieldText');
		$f->attr('name', 'key_search');
		$f->attr('size', 15);
		$f->label = $this->_('Search');
		$f->description = $this->_('Hot key to toggle scroll/focus to search.');
		$inputfields->add($f);

		$f = $modules->get('InputfieldText');
		$f->attr('name', 'key_tree');
		$f->attr('size', 15);
		$f->label = $this->_('Toggle "quick tree"');
		$f->description = $this->_('Hot key to toggle "quick tree" panel.');
		$inputfields->add($f);

		return $inputfields;
	}
}