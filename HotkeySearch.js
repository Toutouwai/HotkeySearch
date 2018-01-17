$(function() {
	
	// HotkeySearch config
	var hks_config = typeof ProcessWire !== 'undefined' ? ProcessWire.config.HotkeySearch : config.HotkeySearch;

	// Toggle scroll to top & search focus
	var $search_input = hks_config.admin_theme === 'AdminThemeUikit' ? $('.pw-search-input') : $('#ProcessPageSearchQuery');
	var current_position;
	var jumped = false;
	Mousetrap.bind(hks_config.key_search, function(e) {
		if(!jumped) {
			current_position = $(document).scrollTop();
			$(document).scrollTop(0);
			e.preventDefault();
			$search_input.focus();
			jumped = true;
		} else {
			$(document).scrollTop(current_position);
			jumped = false;
		}
	});

	// Toggle quick tree
	var $tree_button = $("a[data-tab-text='Tree']");
	if($tree_button.length) {
		Mousetrap.bind(hks_config.key_tree, function() {
			$tree_button[0].click();
		});
	}

});