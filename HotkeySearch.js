var hks_config = config.HotkeySearch;

$(function() {

	// toggle scroll to top & search focus
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

	// trigger focused search result link
	var search_input = document.getElementById("ProcessPageSearchQuery");
	Mousetrap(search_input).bind(hks_config.key_trigger, function() {
		var focused_link = $('#ProcessPageSearchAutocomplete a.ui-state-focus');
		if(focused_link.length) {
			focused_link[0].click();
		}
	});

});