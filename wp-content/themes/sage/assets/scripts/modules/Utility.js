/* eslint-disable no-undef */
function resizeWidthOnly(start, finish) {
	const initialInnerWidth = [window.innerWidth];
	// eslint-disable-next-line no-return-assign, func-names, no-restricted-globals
	return onresize = function () {
		const newInnerWidth = window.innerWidth;
		const previousInnerWidth = initialInnerWidth.length;
		initialInnerWidth.push(newInnerWidth);
		if (initialInnerWidth[previousInnerWidth] !== initialInnerWidth[previousInnerWidth - 1]) {
			clearTimeout(finish);
			finish = setTimeout(start, 100);
		}
	// eslint-disable-next-line no-sequences
	}, start;
}

function returnBootstrapBreakpoints() {
	// Define the breakpoints
	const breakpoints = [
		{ name: 'xxl', minWidth: 1400 },
		{ name: 'xl', minWidth: 1200, maxWidth: 1399 },
		{ name: 'lg', minWidth: 1024, maxWidth: 1199 },
		{ name: 'md', minWidth: 768, maxWidth: 1023 },
	];

	// Find the first breakpoint that matches the window width
	const breakpoint = breakpoints.find((bp) => {
		// Get the minimum width of the breakpoint
		const { minWidth } = bp;
		// Get the maximum width of the breakpoint, or set it to Infinity if it's not defined
		const maxWidth = bp.maxWidth || Infinity;
		// Return true if the window width is within the range of the breakpoint
		return window.innerWidth >= minWidth && window.innerWidth <= maxWidth;
	});

	// Return the name of the matching breakpoint, or 'sm' if no match was found
	return breakpoint ? breakpoint.name : 'sm';
}

// bs modal didn't support shift + tab by default
// it would get stuck on the modal, it's a known "issue"
/*
Example:

	let removeTrapFocus; // will store returned function

	$('#close-el').on('click', () => {
		// other logic
		// Remove trapFocus when closing the dropdown
		if (removeTrapFocus) {
			removeTrapFocus(); // is not returning remove event listener
		}
	});

	$('#open-el').on('click', () => {
		// Use trapFocus when opening the dropdown
		const modalElement = document.querySelector('.trapped-el');
		removeTrapFocus = UTIL_FUNCTION.trapFocus(modalElement); // fires on assignment
	});
*/
function trapFocus(modal) {
	// Define a CSS selector for focusable elements that are not disabled
	const focusableElsSelector = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), iframe';

	// Find all focusable elements within the modal, convert the NodeList to an array, and filter out elements that are not visible
	const focusableEls = Array.from(modal.querySelectorAll(focusableElsSelector)).filter((el) => {
		const style = window.getComputedStyle(el);
		return style.display !== 'none' && style.visibility !== 'hidden';
	});

	// Get the first and last focusable elements in the modal
	const firstFocusableEl = focusableEls[0];
	const lastFocusableEl = focusableEls[focusableEls.length - 1];

	// Define the Tab key's keycode
	const KEYCODE_TAB = 9;

	// Define the event listener function for keydown events
	const keydownHandler = (e) => {
		// Check if the Tab key is pressed
		const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
		// If the Tab key is not pressed, do nothing and return
		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey && document.activeElement === firstFocusableEl) {
			lastFocusableEl.focus();
			e.preventDefault();
		} else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
			firstFocusableEl.focus();
			e.preventDefault();
		}
	};

	// Add the event listener for keydown events on the modal
	modal.addEventListener('keydown', keydownHandler);

	// Return a function to remove the event listener when called
	return () => {
		modal.removeEventListener('keydown', keydownHandler);
	};
}

//
// bootstrap carousel ADA updates
//
// pause the carousel and update button
function sageBS5CarouselPause(carouselMethods, playPauseIcon, playPause, bsCarousel) {
	carouselMethods.pause();
	if (bsCarousel.classList.contains('pause-current-carousel')) {
		if (playPauseIcon) {
			playPauseIcon.classList.add('bi-pause-fill');
			playPauseIcon.classList.remove('bi-play-fill');
		}
		if (playPause) {
			playPause.setAttribute('aria-label', 'play carousel');
		}
	}
}

function sageBS5CarouselPlay(carouselMethods, playPauseIcon, playPause, bsCarousel) {
	if (!bsCarousel.classList.contains('pause-current-carousel')) {
		carouselMethods.cycle();
		if (playPauseIcon) {
			playPauseIcon.classList.add('bi-play-fill');
			playPauseIcon.classList.remove('bi-pause-fill');
		}
		if (playPause) {
			playPause.setAttribute('aria-label', 'pause carousel');
		}
	}
}

function sageBS5CarouselSlideChange(event, carouselMethods, playPauseIcon, playPause, bsCarousel, bsSlides, bsIndicators, currentIndicator) {
	const currentSlide = event.to;
	bsSlides.forEach((el) => {
		el.setAttribute('aria-hidden', 'true');
		el.setAttribute('tabindex', '-1');
	});
	bsSlides[currentSlide].setAttribute('aria-hidden', 'false');
	bsSlides[currentSlide].removeAttribute('tabindex');

	if (bsIndicators) {
		bsIndicators.forEach((el) => {
			el.innerHTML = '';
		});
		bsIndicators[currentSlide].innerHTML = currentIndicator;
	}

	if (document.body.classList.contains('pause-all') || bsCarousel.classList.contains('pause-current-carousel')) {
		sageBS5CarouselPause(carouselMethods, playPauseIcon, playPause, bsCarousel);
	}
}

function sageBS5CarouselPlayPauseClick(event, playPause, carouselMethods, playPauseIcon, instanceState, bsCarousel) {
	event.preventDefault();
	const playPauseLabel = playPause.getAttribute('aria-label');
	bsCarousel.classList.toggle('pause-current-carousel');
	if (playPauseLabel === 'play carousel') {
		sageBS5CarouselPlay(carouselMethods, playPauseIcon, playPause, bsCarousel);
		instanceState.isManuallyPaused = false;
	} else {
		sageBS5CarouselPause(carouselMethods, playPauseIcon, playPause, bsCarousel);
		instanceState.isManuallyPaused = true;
	}
}

function sageBS5CarouselMouseEnter(carouselMethods, playPauseIcon, playPause, bsCarousel) {
	sageBS5CarouselPause(carouselMethods, playPauseIcon, playPause, bsCarousel);
}

function sageBS5CarouselMouseLeave(carouselMethods, playPauseIcon, playPause, instanceState, bsCarousel) {
	if (!document.body.classList.contains('pause-all') && !instanceState.isManuallyPaused) {
		sageBS5CarouselPlay(carouselMethods, playPauseIcon, playPause, bsCarousel);
	}
}

function accessibleCarousel(currentCarousel) {
	const bsCarousel = document.getElementById(currentCarousel);
	const bsSlides = bsCarousel.querySelectorAll('.carousel-item');
	const bsIndicators = bsCarousel.querySelectorAll('[data-js="update-indicator-text"]');
	const currentIndicator = 'current slide is';
	const playPause = bsCarousel.querySelector('[data-js="pause-play-carousel"]');
	const playPauseIcon = bsCarousel.querySelector('[data-js="play-pause-icon"]');
	const instanceState = { isManuallyPaused: false };

	const carouselMethods = new bootstrap.Carousel(bsCarousel, {
		pause: false // Disable default pause on hover
	});

	bsCarousel.addEventListener('slide.bs.carousel', (event) => sageBS5CarouselSlideChange(event, carouselMethods, playPauseIcon, playPause, bsCarousel, bsSlides, bsIndicators, currentIndicator));
	bsCarousel.addEventListener('slide.bs.carousel', (event) => {
		// eslint-disable-next-line no-undef
		const height = $(event.relatedTarget).height();
		// eslint-disable-next-line no-undef
		const $innerCarousel = $(event.target).find('.carousel-inner');

		$innerCarousel.animate({
			height
		});
	});

	if (playPause) {
		playPause.addEventListener('click', (event) => sageBS5CarouselPlayPauseClick(event, playPause, carouselMethods, playPauseIcon, instanceState, bsCarousel));

		bsCarousel.addEventListener('mouseenter', () => sageBS5CarouselMouseEnter(carouselMethods, playPauseIcon, playPause, bsCarousel));

		bsCarousel.addEventListener('mouseleave', () => sageBS5CarouselMouseLeave(carouselMethods, playPauseIcon, playPause, instanceState, bsCarousel));
	}
}

function playPauseAosAnimation(AOS, cb) {
	let clicked = false;
	const $animationToggle = $('[data-js="play-pause-aos"]');
	const $aosAttrs = $('[data-aos]');
	const animationClass = 'aos-animate';
	const $pauseText = $('[data-js="toggle-aos-pause-text"]');
	const $playText = $('[data-js="toggle-aos-play-text"]');
	const hideText = 'd-none';
	const bodyEl = $('body');

	$animationToggle.on('click', () => {
		if (clicked) {
			$aosAttrs.removeClass(animationClass);
			// will reset all the aos elements and allow you to view them once again
			AOS.refreshHard();
			clicked = false;
		} else {
			// another function passed?
			$aosAttrs.addClass(animationClass);
			clicked = true;
		}
		$pauseText.toggleClass(hideText);
		$playText.toggleClass(hideText);
		bodyEl.toggleClass('pause-all');
		// another function passed?
		// example, see home page,
		// passes click function to pause carousel when all animations paused etc
		if (cb) {
			cb();
		}
	});
}

function tabPanelArrowChange(currentTab) {
	const currentTabEl = document.getElementById(currentTab);
	const availableTabEls = document.querySelector(`#${currentTab}`).querySelectorAll('[data-bs-toggle="tab"]');
	const lastTabEl = availableTabEls.length - 1;

	function accessPrevNextTabs(direction) {
		$(availableTabEls).attr('tabindex', '-1');
		// eslint-disable-next-line no-plusplus
		for (let index = 0; index < availableTabEls.length; index++) {
			const element = availableTabEls[index];
			let nextEl = '';
			if (direction.direction === 'prev') {
				nextEl = index - 1;
				if (element.classList.contains('active') && index !== 0) {
					$(availableTabEls[nextEl]).tab('show').attr('tabindex', '0').focus();
					break;
				}
			} else {
				nextEl = index + 1;
				if (element.classList.contains('active') && availableTabEls.length !== nextEl) {
					$(availableTabEls[nextEl]).tab('show').attr('tabindex', '0').focus();
					break;
				}
			}
		}
	}

	currentTabEl.addEventListener('keyup', (e) => {
		// eslint-disable-next-line default-case
		switch (e.which) {
		case 35:
			$(availableTabEls[lastTabEl]).tab('show').focus();
			break;
		case 36:
			$(availableTabEls[0]).tab('show').focus();
			break;
		case 37: // left arrow
			accessPrevNextTabs({ direction: 'prev' });
			break;
		// case 38: // top
		// accessPrevNextTabs({ direction: 'prev' });
		// break;
		case 39: // right
			accessPrevNextTabs({ direction: 'next' });
			break;
		// case 40: // bottom
		// accessPrevNextTabs({ direction: 'next' });
		// break;
		}
	});
}

function normalizeSlideHeights(carousels) {
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < carousels.length; i++) {
		const items = carousels[i].querySelectorAll('.carousel-item');
		// eslint-disable-next-line no-plusplus
		for (let j = 0; j < items.length; j++) {
			items[j].style.minHeight = '0';
		}

		let maxHeight = 0;
		// eslint-disable-next-line no-plusplus
		for (let k = 0; k < items.length; k++) {
			const itemHeight = items[k].offsetHeight;
			if (itemHeight > maxHeight) {
				maxHeight = itemHeight;
			}
		}
		// eslint-disable-next-line no-plusplus
		for (let l = 0; l < items.length; l++) {
			items[l].style.minHeight = `${maxHeight}px`;
		}
	}
}

function adjustHeightOnSlide(carousels) {
	carousels.forEach((carousel) => {
		carousel.addEventListener('slide.bs.carousel', (event) => {
			// eslint-disable-next-line no-undef
			const height = $(event.relatedTarget).height();
			// eslint-disable-next-line no-undef
			const $innerCarousel = $(event.target).find('.carousel-inner');

			$innerCarousel.animate({
				height
			});
		});
	});
}

function resetHeightOnBreakpoint(carousels) {
	carousels.forEach((carousel) => {
		// console.log(carousel);
		const carouselInner = carousel.querySelector('.carousel-inner');
		carouselInner.removeAttribute('style');
	});
}

function setupSwipeHandling(carousel) {
	const bsCarousel = new bootstrap.Carousel(carousel, {
		interval: false,
	});
	let touchStartX = 0;
	let touchStartY = 0;
	let isDragging = false;

	function handleSwipe(touchEndX, touchEndY) {
		const horizontalMovement = touchEndX - touchStartX;
		const verticalMovement = Math.abs(touchEndY - touchStartY);
		const verticalThreshold = 50; // Set a threshold for vertical movement (in pixels)
		const minDragDistance = 15; // Set a minimum drag distance (in pixels)

		if (
			verticalMovement <= verticalThreshold && Math.abs(horizontalMovement) > minDragDistance
		) {
			horizontalMovement < 0 ? bsCarousel.next() : bsCarousel.prev();
		}
	}

	function handleStart(event) {
		touchStartX = event.clientX || event.changedTouches[0].screenX;
		touchStartY = event.clientY || event.changedTouches[0].screenY;
		isDragging = true;
	}

	function handleEnd(event) {
		const touchEndX = event.clientX || event.changedTouches[0].screenX;
		const touchEndY = event.clientY || event.changedTouches[0].screenY;
		isDragging = false;
		handleSwipe(touchEndX, touchEndY);
	}

	function handleMove(event) {
		if (!isDragging) return;
		event.preventDefault();
	}

	// Touch events
	carousel.addEventListener('touchstart', handleStart);
	carousel.addEventListener('touchend', handleEnd);

	// Mouse events
	carousel.addEventListener('mousedown', handleStart);
	carousel.addEventListener('mousemove', handleMove);
	carousel.addEventListener('mouseup', handleEnd);

	// Prevent dragging on text and other elements
	carousel.addEventListener('dragstart', (event) => {
		event.preventDefault();
	});
}

export {
	returnBootstrapBreakpoints,
	resizeWidthOnly,
	trapFocus,
	accessibleCarousel,
	playPauseAosAnimation,
	tabPanelArrowChange,
	normalizeSlideHeights,
	adjustHeightOnSlide,
	resetHeightOnBreakpoint,
	setupSwipeHandling
};
