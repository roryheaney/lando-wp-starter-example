import 'what-input';
// owl
// import 'owl.carousel';

// jquery cookie
// import 'js-cookie';
// window.fancySquareCookies = require('js-cookie');

// lazy load images and bg's
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/bgset/ls.bgset';

const UTIL_JS = require('./modules/Utility');

// set breakpoint on page load, breakpoints match media query variables - xxl, xl, lg, etc
window.bsBreakpoint = UTIL_JS.returnBootstrapBreakpoints();

// axios
window.axios = require('axios');

// accessible carousel
const carouselEls = document.querySelectorAll('[data-js="carousel-accessibility"]');
// pass carousel elements to carousel ADA function
if (carouselEls) {
	carouselEls.forEach((carousel) => {
		UTIL_JS.accessibleCarousel(carousel.id);
	});
}

// accessible tabs
const tabpanelEls = document.querySelectorAll('[data-js="accessible-tabs"]');
if (tabpanelEls) {
	tabpanelEls.forEach((tabpanel) => {
		UTIL_JS.tabPanelArrowChange(tabpanel.id);
	});
}

function initializeCoverBlockVideoLazyLoad() {
	// Find all elements with the data-js="compass-video-el" attribute
	const videoPlayers = document.querySelectorAll(
		'.wp-block-cover__video-background--lazy',
	);

	const lazyLoadVideo = (video) => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Load the video source
						const source = document.createElement('source');
						source.src = video.dataset.src;
						source.type = 'video/mp4'; // Assuming type is provided in data attributes
						video.appendChild(source);
						video.load();
						observer.unobserve(video);
					}
				});
			},
			{
				rootMargin: '500px 0px 0px 0px', // Load the video 500px before it enters the viewport
				threshold: 0, // Threshold set to 0 as we are handling the margin
			},
		);
		observer.observe(video);
	};

	videoPlayers.forEach((video) => {
		lazyLoadVideo(video);
	});
}
initializeCoverBlockVideoLazyLoad();
