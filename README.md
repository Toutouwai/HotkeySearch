HotKeySearch
============

ProcessWire module that adds configurable hot keys for easier use of the admin search via the keyboard. Uses [Mousetrap](https://craig.is/killing/mice) for key bindings.

Module provides two hot key bindings:
* Jump to and focus admin search input. Also handy for quickly getting to the admin menu tabs when they have scrolled outside the viewport. If you change your mind, tab out of the search input and press the hot key again and the viewport will jump back to your previous scroll position. Uses 's' key by default.
* Trigger link for focused search result. If you use the arrow keys to highlight a search result this hot key allows you to trigger the link from the keyboard. Uses 'enter' key by default.

The hot keys are configurable in the module settings. Hot keys only fire when you are not inside an input, textarea or select. 

This module is only intended for use with the default admin theme. Admin Theme Reno already binds the up arrow key for closing the search input and doesn't show a visual highlight for search results focused via the keyboard so the module would be less useful there.
