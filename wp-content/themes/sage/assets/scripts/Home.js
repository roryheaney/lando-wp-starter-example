// /* global $ */
const UTIL_JS = require('./modules/Utility');

const carouselEls = document.querySelectorAll('[data-js="carousel-accessibility"]');
// get current breakpoint
let currentBreakPoint = window.bsBreakpoint;
// pass carousel elements to carousel ADA function
if (carouselEls) {
	carouselEls.forEach((carousel) => {
		UTIL_JS.accessibleCarousel(carousel.id);
	});
}

// update current breakpoint on resize width only
UTIL_JS.resizeWidthOnly(() => {
	currentBreakPoint = UTIL_JS.returnBootstrapBreakpoints();
	// eslint-disable-next-line no-console
	console.log(currentBreakPoint);
});
// eslint-disable-next-line no-console
console.log(currentBreakPoint);
// eslint-disable-next-line no-console
console.log('You require additional pylons');

const adventurer = {
	name: 'Alice',
	cat: {
		name: 'Hannibal'
	}
};

const dogName = adventurer.dog?.name;
// eslint-disable-next-line no-console
console.log(dogName);
const catName = adventurer.cat?.name;
// eslint-disable-next-line no-console
console.log(catName);

// ES2020 nullish coalescing
