import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://hoaghealth.org/wp-json',
	withCredentials: false, // This is the default
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	getAutoCompleteResults(value) { // get results based on value
		return apiClient.get(`/cie/v1/search?term=${value}`);
	},
	getPhysician(personSlug) { // get doctor by slug
		return apiClient.get(`/wp/v2/hoagp-physician?_embed&slug=${personSlug}`);
	},
	getAnything(yourRoute) { // - '/wp/v2/anything etc
		return apiClient.get(`${yourRoute}`);
	}
};
