var hks_config = config.HotKeySearch;

$(function() {

	// toggle scroll to top & search focus
	var current_position;
	var jumped = false;
	Mousetrap.bind(hks_config.key_search, function() {
		if(!jumped) {
			current_position = $(document).scrollTop();
			$(document).scrollTop(0);
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
		var focused_href = $('#ProcessPageSearchAutocomplete a.ui-state-focus').attr('href');
		if(focused_href) {
			window.location.href = focused_href;
		}
	});

});