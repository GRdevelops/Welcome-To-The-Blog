// Pop-up //
const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];

const timeToAppear = 4000; // Milliseconds after which the pop-up will appear
const timeInterval = 60 * 1000; // <-- Modify this. Prevent the pop-up from reappearing when reloading: Insert interval in milliseconds.
let minutes = timeInterval / 1000 / 60; // Convert milliseconds to minutes

const modalClosedTime = localStorage.getItem('modalClosed');
let currentTime = new Date().getTime();

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
	currentTime = new Date().getTime(); // current timestamp in milliseconds
	localStorage.setItem('modalClosed', currentTime.toString());
});

if (!modalClosedTime || currentTime - modalClosedTime >= timeInterval) {
	setTimeout(() => {
		modal.style.display = 'block';
	}, timeToAppear);
}

// // Close the pop-up by clicking outside the window
// window.addEventListener('click', (event) => {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//         currentTime = new Date().getTime(); // current timestamp in milliseconds
//         localStorage.setItem('modalClosed', currentTime.toString());
//     }
// });

// localStorage.removeItem('modalClosed'); // Uncomment to reset pop-up

const timeRemaining = document.getElementById('time-interval');

// Modify message in the popup
if (minutes < 1) {
	minutes = minutes * 60;
	timeRemaining.innerHTML = `${minutes} seconds`;
} else if (minutes === 1) {
	timeRemaining.innerHTML = `${minutes} minute`;
} else {
	timeRemaining.innerHTML = `${minutes} minutes`;
}
// End of pop-up //

// Articles //
// Event listeners to category buttons
document.querySelectorAll('.category').forEach((button) => {
	button.addEventListener('click', (event) => {
		const category = button.id;

		document.querySelectorAll('.category').forEach((category) => {
			category.classList.remove('inverted');
		});

		button.classList.add('inverted');

		filterArticles(category);
	});
});

// Filter articles by data attribute
const filterArticles = (category) => {
	const articles = document.querySelectorAll('.articles .article');
	articles.forEach((article) => {
		if (article.getAttribute('data-category') === category || category === 'all') {
			article.style.display = ''; // Show the article
		} else {
			article.style.display = 'none'; // Hide the article
		}
	});
};
// End of articles //

// Mailchimp forms
(function ($) {
	window.fnames = new Array();
	window.ftypes = new Array();
	fnames[0] = 'EMAIL';
	ftypes[0] = 'email';
	fnames[1] = 'FNAME';
	ftypes[1] = 'text';
	fnames[2] = 'LNAME';
	ftypes[2] = 'text';
	fnames[3] = 'ADDRESS';
	ftypes[3] = 'address';
	fnames[4] = 'PHONE';
	ftypes[4] = 'phone';
	fnames[5] = 'BIRTHDAY';
	ftypes[5] = 'birthday';
})(jQuery);
var $mcj = jQuery.noConflict(true);

// Nav-bar
const hamburger = document.querySelector('.hamburger');
const navMenus = document.querySelectorAll('.nav-menu');
const links = document.querySelectorAll('.nav-menu a');

// Toggle function
const toggleMenu = () => {
	hamburger.classList.toggle('active');
	navMenus.forEach((menu) => menu.classList.toggle('active'));
};

// Event Handlers
hamburger.addEventListener('click', toggleMenu);

links.forEach((link) => {
	link.addEventListener('click', toggleMenu);
});

// End of nav-bar
