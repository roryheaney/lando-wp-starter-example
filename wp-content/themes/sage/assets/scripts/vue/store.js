import { createStore } from 'vuex';

// No need for Vue.use(Vuex) in Vuex 4.

const store = createStore({
	state: {
		doctor: '',
		doctors: '',
		showDoctors: false,
		showDoctor: false
	},
	mutations: {
		DOCTORS_VISIBILITY(state, payload) {
			state.showDoctors = payload;
		},
		SET_DOCTORS(state, payload) {
			state.doctors = payload;
		},
		DOCTOR_VISIBILITY(state, payload) {
			state.showDoctor = payload;
		},
		SET_DOCTOR(state, payload) {
			state.doctor = payload;
		}
	},
	actions: {},
	getters: {}
});

export default store;
