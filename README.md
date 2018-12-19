# HotkeySearch

ProcessWire module that adds configurable hot keys for easier use of the admin search via the keyboard. Uses [Mousetrap](https://craig.is/killing/mice) for key bindings.

## Features

Module provides the following hot key bindings:
* Jump to and focus admin search input. Also handy for quickly getting to the admin menu tabs when they have scrolled outside the viewport. If you change your mind, tab out of the search input and press the hot key again and the viewport will jump back to your previous scroll position. Uses 's' key by default.
* Toggle "quick tree" panel open and closed for easy access to the page tree. Uses 't' key by default.

The hot keys are configurable in the module settings. Hot keys only fire when you are not inside an input, textarea or select. 

### Note about admin themes

This module is intended for use with AdminThemeDefault and AdminThemeUikit. AdminThemeReno already binds the up arrow key for closing the search input and doesn't show a visual highlight for search results focused via the keyboard so the module would be less useful there.
