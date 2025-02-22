// ----- IMPORTS -----

// Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Vue Core
import { createApp } from 'vue';

// App Specific
import store from './vue/store';
import CardExample from './vue/CardExample.vue';
import directives from './modules/Directives';

// ----- MAIN APP INITIALIZATION -----

const CardExampleEl = document.getElementById('card-example');

if (CardExampleEl) { // Check if element exists
	const app = createApp(CardExample);

	// Register global directives
	Object.keys(directives).forEach((directiveKey) => {
		app.directive(directiveKey, directives[directiveKey]);
	});

	app.use(store).mount('#card-example'); // Use Vuex store and mount the app
}
