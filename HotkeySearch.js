var hks_config = config.HotkeySearch;

$(function() {

	// Toggle scroll to top & search focus
	var current_position;
	var jumped = false;
	Mousetrap.bind(hks_config.key_search, function(e) {
		if(!jumped) {
			current_position = $(document).scrollTop();
			$(document).scrollTop(0);
			e.preventDefault();
			$('#ProcessPageSearchQuery').focus();
			jumped = true;
		} else {
			$(document).scrollTop(current_position);
			jumped = false;
		}
	});

	// Trigger focused search result link
	var $search_input = $("#ProcessPageSearchQuery")[0];
	Mousetrap($search_input).bind(hks_config.key_trigger, function() {
		var $focused_link = $('#ProcessPageSearchAutocomplete a.ui-state-focus');
		if($focused_link.length) {
			$focused_link[0].click();
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