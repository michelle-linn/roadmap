// JS is for state

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
	const dropdown = document.querySelector('.dropdown');
	const btn = document.querySelector('.dropdown-btn');
    const items = document.querySelectorAll('.dropdown-item');

    // "Run this function every time the button is clicked"
    // e is the event object
	btn.addEventListener('click', function(e) {
        // changes the state of the dropdown when clicked
        // adds the class 'open' to classList if not present, removes it if present
		dropdown.classList.toggle('open');
	});

    items.forEach(function(item) {
        // for each dropdown item, add a click listener
        item.addEventListener('click', function(e) {
            // when an item is clicked, remove 'selected' from all items
            items.forEach(function (i) {
                i.classList.remove('selected');
            });
            // add 'selected' to the clicked item
            item.classList.add('selected');

            // button text becomes the clicked item's text
            btn.textContent = item.textContent;
            dropdown.classList.remove('open');
        });
    });

	// Optional: add a click listener to the whole page
    // e.target is the element that was clicked
    // When we click inside the dropdown, nothing happens
    // When we click outside the dropdown, it closes
	document.addEventListener('click', function(e) {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove('open');
		}
	});
});
